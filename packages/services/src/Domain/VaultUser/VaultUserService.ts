import { VaultLockServiceInterface } from './../VaultLock/VaultLockServiceInterface'
import { LeaveVault } from './UseCase/LeaveSharedVault'
import { GetVault } from '../Vault/UseCase/GetVault'
import { InternalEventBusInterface } from './../Internal/InternalEventBusInterface'
import { RemoveVaultMember } from './UseCase/RemoveSharedVaultMember'
import { VaultServiceInterface } from '../Vault/VaultServiceInterface'
import { GetVaultUsers } from './UseCase/GetVaultUsers'
import { SharedVaultListingInterface, VaultListingInterface } from '@standardnotes/models'
import { VaultUserServiceInterface } from './VaultUserServiceInterface'
import { ClientDisplayableError, SharedVaultUserServerHash, isClientDisplayableError } from '@standardnotes/responses'
import { AbstractService } from './../Service/AbstractService'
import { VaultUserServiceEvent } from './VaultUserServiceEvent'
import { Result } from '@standardnotes/domain-core'
import { IsVaultOwner } from './UseCase/IsVaultOwner'
import { InternalEventInterface } from '../Internal/InternalEventInterface'
import { InternalEventHandlerInterface } from '../Internal/InternalEventHandlerInterface'
import { ApplicationEvent } from '../Event/ApplicationEvent'
import { IsReadonlyVaultMember } from './UseCase/IsReadonlyVaultMember'
import { IsVaultAdmin } from './UseCase/IsVaultAdmin'

export class VaultUserService
  extends AbstractService<VaultUserServiceEvent>
  implements VaultUserServiceInterface, InternalEventHandlerInterface
{
  constructor(
    private vaults: VaultServiceInterface,
    private vaultLocks: VaultLockServiceInterface,
    private _getVaultUsers: GetVaultUsers,
    private _removeVaultMember: RemoveVaultMember,
    private _isVaultOwner: IsVaultOwner,
    private _isVaultAdmin: IsVaultAdmin,
    private _isReadonlyVaultMember: IsReadonlyVaultMember,
    private _getVault: GetVault,
    private _leaveVault: LeaveVault,
    eventBus: InternalEventBusInterface,
  ) {
    super(eventBus)
  }

  override deinit(): void {
    super.deinit()
    ;(this.vaults as unknown) = undefined
    ;(this._getVaultUsers as unknown) = undefined
    ;(this._removeVaultMember as unknown) = undefined
    ;(this._isVaultOwner as unknown) = undefined
    ;(this._getVault as unknown) = undefined
    ;(this._leaveVault as unknown) = undefined
  }

  async handleEvent(event: InternalEventInterface): Promise<void> {
    if (event.type === ApplicationEvent.CompletedFullSync) {
      this.vaults.getVaults().forEach((vault) => {
        if (!vault.isSharedVaultListing()) {
          return
        }
        this._getVaultUsers
          .execute({
            sharedVaultUuid: vault.sharing.sharedVaultUuid,
            readFromCache: false,
          })
          .catch(console.error)
      })
    }
  }

  public async getSharedVaultUsersFromServer(
    sharedVault: SharedVaultListingInterface,
  ): Promise<SharedVaultUserServerHash[] | undefined> {
    const result = await this._getVaultUsers.execute({
      sharedVaultUuid: sharedVault.sharing.sharedVaultUuid,
      readFromCache: false,
    })
    if (result.isFailed()) {
      return undefined
    }

    return result.getValue()
  }

  public isCurrentUserSharedVaultOwner(sharedVault: SharedVaultListingInterface): boolean {
    return this._isVaultOwner.execute(sharedVault).getValue()
  }

  public isCurrentUserSharedVaultAdmin(sharedVault: SharedVaultListingInterface): boolean {
    return this._isVaultAdmin.execute(sharedVault).getValue()
  }

  public isCurrentUserReadonlyVaultMember(vault: VaultListingInterface): boolean {
    if (!vault.isSharedVaultListing()) {
      return false
    }
    return this._isReadonlyVaultMember.execute(vault).getValue()
  }

  async removeUserFromSharedVault(sharedVault: SharedVaultListingInterface, userUuid: string): Promise<Result<void>> {
    if (!this.isCurrentUserSharedVaultOwner(sharedVault)) {
      throw new Error('Only vault admins can remove users')
    }

    if (this.vaultLocks.isVaultLocked(sharedVault)) {
      throw new Error('Cannot remove user from locked vault')
    }

    const result = await this._removeVaultMember.execute({
      sharedVaultUuid: sharedVault.sharing.sharedVaultUuid,
      userUuid,
    })

    if (result.isFailed()) {
      return result
    }

    void this.notifyEvent(VaultUserServiceEvent.UsersChanged)

    await this.vaults.rotateVaultRootKey(sharedVault)

    return result
  }

  public isVaultUserOwner(user: SharedVaultUserServerHash): boolean {
    const result = this._getVault.execute<SharedVaultListingInterface>({ sharedVaultUuid: user.shared_vault_uuid })
    if (result.isFailed()) {
      return false
    }

    const vault = result.getValue()
    return vault != undefined && vault.sharing.ownerUserUuid === user.user_uuid
  }

  async leaveSharedVault(sharedVault: SharedVaultListingInterface): Promise<ClientDisplayableError | void> {
    const result = await this._leaveVault.execute({
      sharedVault: sharedVault,
    })

    if (isClientDisplayableError(result)) {
      return result
    }

    void this.notifyEvent(VaultUserServiceEvent.UsersChanged)
  }

  getFormattedMemberPermission(permission: string): string {
    switch (permission) {
      case 'admin':
        return 'Admin'
      case 'write':
        return 'Read / Write'
      case 'read':
        return 'Read-only'
      default:
        return 'Unknown'
    }
  }
}

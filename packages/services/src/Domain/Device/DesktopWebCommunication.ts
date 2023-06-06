import { DecryptedTransferPayload } from '@standardnotes/models'
import { DesktopWatchedDirectoriesChanges, FileBackupsDevice } from '@standardnotes/files'
import { HomeServerEnvironmentConfiguration } from '../HomeServer/HomeServerEnvironmentConfiguration'

export interface WebClientRequiresDesktopMethods extends FileBackupsDevice {
  syncComponents(payloads: unknown[]): void

  onSearch(text?: string): void

  get extensionsServerHost(): string

  askForMediaAccess(type: 'camera' | 'microphone'): Promise<boolean>

  setHomeServerConfiguration(configurationJSONString: string): Promise<void>
}

export interface DesktopClientRequiresWebMethods {
  updateAvailable(): void

  windowGainedFocus(): void

  windowLostFocus(): void

  onComponentInstallationComplete(componentData: DecryptedTransferPayload, error: unknown): Promise<void>

  handleWatchedDirectoriesChanges(changes: DesktopWatchedDirectoriesChanges): Promise<void>

  handleHomeServerConfigurationChanged(config: HomeServerEnvironmentConfiguration): Promise<void>
}

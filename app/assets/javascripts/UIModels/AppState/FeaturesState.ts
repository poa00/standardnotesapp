import { WebApplication } from '@/UIModels/Application'
import { ApplicationEvent, FeatureIdentifier, FeatureStatus } from '@standardnotes/snjs'
import { action, makeObservable, observable, runInAction, when } from 'mobx'

export class FeaturesState {
  hasFolders: boolean
  hasSmartViews: boolean
  hasFiles: boolean
  premiumAlertFeatureName: string | undefined

  constructor(private application: WebApplication, appObservers: (() => void)[]) {
    this.hasFolders = this.isEntitledToFolders()
    this.hasSmartViews = this.isEntitledToSmartViews()
    this.hasFiles = this.isEntitledToFiles()
    this.premiumAlertFeatureName = undefined

    makeObservable(this, {
      hasFolders: observable,
      hasSmartViews: observable,
      hasFiles: observable,

      premiumAlertFeatureName: observable,
      showPremiumAlert: action,
      closePremiumAlert: action,
    })

    this.showPremiumAlert = this.showPremiumAlert.bind(this)
    this.closePremiumAlert = this.closePremiumAlert.bind(this)

    appObservers.push(
      application.addEventObserver(async (event) => {
        switch (event) {
          case ApplicationEvent.FeaturesUpdated:
          case ApplicationEvent.Launched:
            runInAction(() => {
              this.hasFolders = this.isEntitledToFolders()
              this.hasSmartViews = this.isEntitledToSmartViews()
              this.hasFiles = this.isEntitledToFiles()
            })
        }
      }),
    )
  }

  public async showPremiumAlert(featureName: string): Promise<void> {
    this.premiumAlertFeatureName = featureName
    return when(() => this.premiumAlertFeatureName === undefined)
  }

  public closePremiumAlert() {
    this.premiumAlertFeatureName = undefined
  }

  private isEntitledToFiles(): boolean {
    const status = this.application.features.getFeatureStatus(FeatureIdentifier.Files)

    return status === FeatureStatus.Entitled
  }

  private isEntitledToFolders(): boolean {
    const status = this.application.features.getFeatureStatus(FeatureIdentifier.TagNesting)

    return status === FeatureStatus.Entitled
  }

  private isEntitledToSmartViews(): boolean {
    const status = this.application.features.getFeatureStatus(FeatureIdentifier.SmartFilters)

    return status === FeatureStatus.Entitled
  }
}

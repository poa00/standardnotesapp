import { WebApplication } from '@/Application/Application'
import { FeaturesController } from '@/Controllers/FeaturesController'
import { SubscriptionController } from '@/Controllers/Subscription/SubscriptionController'
import { observer } from 'mobx-react-lite'
import { loadPurchaseFlowUrl } from '../PurchaseFlow/PurchaseFlowFunctions'

type Props = {
  application: WebApplication
  featuresController: FeaturesController
  subscriptionContoller: SubscriptionController
}

const UpgradeNow = ({ application, featuresController, subscriptionContoller }: Props) => {
  const shouldShowCTA = !featuresController.hasFolders
  const hasAccount = subscriptionContoller.hasAccount

  if (hasAccount && subscriptionContoller.hideSubscriptionMarketing) {
    return null
  }

  return shouldShowCTA ? (
    <div className="flex h-full items-center px-2">
      <button
        className="rounded bg-info py-0.5 px-1.5 text-sm font-bold uppercase text-info-contrast hover:brightness-125 lg:text-xs"
        onClick={() => {
          if (hasAccount) {
            void loadPurchaseFlowUrl(application)
            return
          }

          application.getViewControllerManager().purchaseFlowController.openPurchaseFlow()
        }}
      >
        {hasAccount ? 'Unlock features' : 'Sign up to sync'}
      </button>
    </div>
  ) : null
}

export default observer(UpgradeNow)

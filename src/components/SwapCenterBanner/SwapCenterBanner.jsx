import Icon from '../Icon.jsx'
import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { swapFeature } from '../../utils/bannerData.js'

function SwapCenterBanner({ onAction }) {
  const illustration = (
    <div className="swap-art">
      <div className="swap-balance swap-source">
        <span className="swap-balance-label">FROM</span>
        <strong>VE</strong>
        <small>Your balance</small>
      </div>
      <span className="swap-arrow"><Icon name="swap" size={19} /></span>
      <div className="swap-balance swap-destination">
        <span className="swap-balance-label">TO</span>
        <strong>OTHER</strong>
        <small>Supported balance</small>
      </div>
      <span className="swap-convert-label">SWAP</span>
    </div>
  )

  return <RewardBanner feature={swapFeature} illustration={illustration} onAction={onAction} />
}

export default SwapCenterBanner
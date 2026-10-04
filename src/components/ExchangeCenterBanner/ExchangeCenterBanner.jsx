import Icon from '../Icon.jsx'
import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { exchangeFeature } from '../../utils/bannerData.js'

function ExchangeCenterBanner({ onAction }) {
  const illustration = (
    <div className="exchange-art">
      <span className="exchange-orbit orbit-left" />
      <span className="exchange-orbit orbit-right" />
      <div className="exchange-wallet">
        <span className="exchange-wallet-icon"><Icon name="wallet" size={19} /></span>
        <span className="exchange-wallet-label">YOUR BALANCE</span>
        <span className="exchange-wallet-value">VE <span>VEs</span></span>
      </div>
      <span className="exchange-transfer"><Icon name="swap" size={20} /></span>
      <div className="exchange-options">
        <div className="exchange-reward-card exchange-gift">
          <span className="exchange-reward-icon"><Icon name="gift" size={15} /></span>
          <span>GIFT CARD</span>
        </div>
        <div className="exchange-reward-card exchange-upi">
          <span className="exchange-upi-mark">UPI</span>
          <span>REWARD</span>
        </div>
      </div>
      <div className="exchange-path">
        <span>EARN</span><Icon name="arrow" size={11} />
        <span>REDEEM</span><Icon name="arrow" size={11} />
        <span>REWARD</span>
      </div>
    </div>
  )

  return <RewardBanner feature={exchangeFeature} illustration={illustration} onAction={onAction} />
}

export default ExchangeCenterBanner
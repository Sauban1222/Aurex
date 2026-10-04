import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { bonusFeature } from '../../utils/bannerData.js'

function BonusVEsBanner({ onAction }) {
  const illustration = (
    <div className="bonus-art">
      <span className="bonus-glow" />
      <span className="bonus-star star-one">✦</span>
      <span className="bonus-star star-two">✳</span>
      <span className="bonus-star star-three">✧</span>
      <span className="bonus-box">
        <span className="bonus-box-lid" />
        <span className="bonus-box-ribbon" />
        <span className="bonus-box-bow" />
      </span>
      <span className="bonus-badge">BONUS</span>
      <span className="bonus-multiplier">×</span>
      <span className="bonus-coin bonus-coin-one">VE</span>
      <span className="bonus-coin bonus-coin-two">+</span>
      <span className="bonus-coin bonus-coin-three">VE</span>
      <span className="bonus-meter">
        <span className="bonus-meter-label">MORE VEs</span>
        <span className="bonus-meter-track"><span className="bonus-meter-fill" /></span>
        <span className="bonus-meter-spark">✦</span>
      </span>
    </div>
  )

  return <RewardBanner feature={bonusFeature} illustration={illustration} onAction={onAction} />
}

export default BonusVEsBanner
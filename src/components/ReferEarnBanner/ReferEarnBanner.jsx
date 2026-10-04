import Icon from '../Icon.jsx'
import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { referFeature } from '../../utils/bannerData.js'

function ReferEarnBanner({ onAction }) {
  const illustration = (
    <div className="refer-art">
      <span className="orbit orbit-one" />
      <span className="orbit orbit-two" />
      <span className="avatar avatar-a">J</span>
      <span className="avatar avatar-b">M</span>
      <span className="person-label label-you">YOU</span>
      <span className="person-label label-friend">FRIEND</span>
      <span className="refer-plus">+</span>
      <span className="refer-chip"><Icon name="gift" size={14} /> MILESTONE REWARD</span>
      <span className="tiny-star">✳</span>
    </div>
  )

  return <RewardBanner feature={referFeature} illustration={illustration} className="refer-wide" onAction={onAction} />
}

export default ReferEarnBanner
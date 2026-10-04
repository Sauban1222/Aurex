import Icon from '../Icon.jsx'
import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import { captchaFeature } from '../../utils/bannerData.js'

function CaptchaTasksBanner({ onAction }) {
  const illustration = (
    <div className="captcha-art">
      <div className="captcha-challenge">
        <div className="challenge-heading">
          <span className="challenge-lock"><Icon name="shield" size={15} /></span>
          <span><strong>CAPTCHA TASK</strong><small>Complete the challenge accurately</small></span>
          <span className="challenge-step">1 / 1</span>
        </div>
        <div className="challenge-grid">
          <span className="challenge-tile tile-selected"><span className="tile-landscape" /><span className="tile-check"><Icon name="check" size={12} /></span></span>
          <span className="challenge-tile"><span className="tile-landscape tile-city" /></span>
          <span className="challenge-tile tile-selected"><span className="tile-landscape tile-water" /><span className="tile-check"><Icon name="check" size={12} /></span></span>
          <span className="challenge-tile"><span className="tile-landscape tile-city" /></span>
          <span className="challenge-tile tile-selected"><span className="tile-landscape tile-hill" /><span className="tile-check"><Icon name="check" size={12} /></span></span>
          <span className="challenge-tile"><span className="tile-landscape tile-water" /></span>
        </div>
        <div className="challenge-flow" aria-label="Task, verification, completion, and reward">
          <span>TASK</span><Icon name="arrow" size={11} />
          <span>VERIFY</span><Icon name="arrow" size={11} />
          <span>COMPLETE</span><Icon name="arrow" size={11} />
          <span className="challenge-reward">VE</span>
        </div>
        <div className="challenge-footer">
          <span><Icon name="shield" size={13} /> Secure task</span>
          <span className="challenge-submit">VERIFY <Icon name="arrow" size={12} /></span>
        </div>
      </div>
      <span className="captcha-sparkle">✳</span>
    </div>
  )

  return <RewardBanner feature={captchaFeature} illustration={illustration} onAction={onAction} />
}

export default CaptchaTasksBanner

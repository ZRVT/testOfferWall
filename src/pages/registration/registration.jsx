import './styles/registration.css'
import { EmailRegistrations, SocialRegistrations } from './components'

const Registration = () => {
  return (
    <div className="registration-page">
      <div className="registration-card">
        <h1 className="registration-title">Sign Up for Free</h1>
        <EmailRegistrations />
        <div className="registration-divider">
          <span>OR</span>
        </div>
        <SocialRegistrations />
        <p className="registration-footer-text">
          <strong>25 Million</strong> Paid to users who registered!
        </p>
      </div>
    </div>
  )
}
export default Registration

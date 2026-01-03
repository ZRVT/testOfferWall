import { GoogleIcon, FacebookIcon, AppleIcon } from '../../styles/socialIcons'
import './socialRegistrations.css'

const SocialRegistrations = () => {
  const handleGoogleClick = () => console.log('Google clicked')
  const handleFacebookClick = () => console.log('Facebook clicked')
  const handleAppleClick = () => console.log('Apple clicked')

  return (
    <div className="social-buttons">
      <button className="social-btn google-btn" onClick={handleGoogleClick}>
        <GoogleIcon />
        <span>Sign Up with Google</span>
      </button>

      <button className="social-btn facebook-btn" onClick={handleFacebookClick}>
        <FacebookIcon />
        <span>Sign Up with Facebook</span>
      </button>

      <button className="social-btn apple-btn" onClick={handleAppleClick}>
        <AppleIcon />
        <span>Sign Up with Apple</span>
      </button>
    </div>
  )
}
export default SocialRegistrations

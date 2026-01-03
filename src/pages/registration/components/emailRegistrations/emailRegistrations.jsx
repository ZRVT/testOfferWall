import { useState } from 'react'
import { EmailIcon, PasswordIcon } from '../../styles/socialIcons'
import './emailRegistrations.css'

const EmailRegistrations = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  const showPasswordInput = () => {
    if (user.email.length > 0) {
      return true
    }
    return false
  }
  return (
    <form onSubmit={handleSubmit} className="email-form">
      <div className="input-group">
        <span className="input-icon">
          <EmailIcon />
        </span>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={user.email}
          onChange={handleChange}
          className="styled-input"
        />
      </div>
      {showPasswordInput() && (
        <div className="input-group">
          <span className="input-icon">
            <PasswordIcon />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="styled-input"
          />
        </div>
      )}
      <button type="submit" className="start-earning-btn">
        Start earning now
      </button>
    </form>
  )
}
export default EmailRegistrations

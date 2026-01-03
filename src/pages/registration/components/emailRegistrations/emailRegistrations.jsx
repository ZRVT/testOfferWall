import { useState } from 'react'
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
  return (
    <form onSubmit={handleSubmit} className="email-form">
      <div className="input-group">
        <span className="input-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
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
      {/* Password hidden for specific design request, or we can add it later if needed */}
      <button type="submit" className="start-earning-btn">
        Start earning now
      </button>
    </form>
  )
}
export default EmailRegistrations

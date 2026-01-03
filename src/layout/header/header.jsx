import './header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="site-header">
      <section className="header-container">
        <div>
          <img src="logo.png" alt="logo" onClick={() => navigate('/')} />
        </div>
        <div>
          <Link to="/" className="nav-link">
            Campaigns
          </Link>
        </div>
        <div>
          <button className="btn-secondary" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="btn-primary" onClick={() => navigate('/register')}>
            Register
          </button>
        </div>
      </section>
    </header>
  )
}

export default Header

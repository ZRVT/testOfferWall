import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  )
}

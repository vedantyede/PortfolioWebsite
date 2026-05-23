import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Vedant Yede. All rights reserved.
          </span>
          <span className="footer-copy">Frontend Developer · Pune, India</span>
        </div>
      </div>
    </footer>
  )
}

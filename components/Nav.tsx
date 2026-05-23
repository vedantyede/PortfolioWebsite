import React from 'react'

export const Nav = () => {
  return (
    <nav>
      <div className="nav-inner">
        <a className="nav-logo" href="#hero">
          VY
        </a>
        <ul className="nav-links">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

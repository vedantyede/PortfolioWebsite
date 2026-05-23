import React from 'react'

export const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-bg-lines" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          Frontend Developer &nbsp;·&nbsp; 5 Years Experience &nbsp;·&nbsp; Pune,
          India
        </div>
        <h1 className="hero-name">
          <span>Vedant</span>
          <span className="italic">Yede</span>
        </h1>
        <div className="hero-divider" aria-hidden="true">
          <div className="hero-rule" />
          <div className="hero-square" />
        </div>
      </div>
      <div className="hero-bottom reveal">
        <p className="hero-desc">
          Expert in React, Next.js, TypeScript, and Redux — building
          high-performance, scalable, accessible web applications that deliver
          exceptional user experiences through disciplined engineering and
          thoughtful design.
        </p>
        <div className="hero-meta">
          <div className="hero-location">Pune, Maharashtra, India</div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#experience">
              View Work →
            </a>
            <a className="btn btn-outline" href="mailto:vedantyede@gmail.com">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

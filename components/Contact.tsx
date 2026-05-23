import React from 'react'

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left reveal">
            <h2 className="contact-headline">
              Let&apos;s
              <br />
              <em>Build</em>
              <br />
              Together.
            </h2>
            <nav className="contact-links" aria-label="Contact links">
              {[
                {
                  label: "Email",
                  value: "vedantyede@gmail.com",
                  href: "mailto:vedantyede@gmail.com",
                },
                {
                  label: "GitHub",
                  value: "github.com/vedantyede",
                  href: "https://github.com/vedantyede",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/vedantyede",
                  href: "https://linkedin.com/in/vedantyede",
                },
                {
                  label: "Phone",
                  value: "+91 9604065882",
                  href: "tel:+919604065882",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  className="contact-link"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value} →</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="contact-right reveal">
            <p className="contact-bio">
              A results-focused frontend developer with 5 years of experience driving
              business productivity through innovative solutions. Known for delivering
              high-quality, user-centric applications with a deep commitment to
              performance, accessibility, and clean architecture.
            </p>
            <div className="contact-education">
              <div className="education-label">Education</div>
              <div className="education-degree">Bachelor of Engineering</div>
              <div className="education-school">
                Yeshwantrao Chavan College of Engineering, Nagpur
              </div>
              <div className="education-year">June 2017 — July 2021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

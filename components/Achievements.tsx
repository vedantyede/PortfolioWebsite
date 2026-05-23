import React from 'react'

export const Achievements = () => {
  return (
    <section id="achievements" aria-label="Awards and recognition">
      <div className="ach-bg" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="ach-header">
          <div className="ach-header-label">Recognition</div>
          <h2 className="ach-header-title">Awards</h2>
        </div>
        <div className="achievements-grid reveal">
          <div className="ach-card">
            <div className="ach-award">Team Award</div>
            <h3 className="ach-title">Bravo</h3>
            <p className="ach-desc">
              Recognized by the customer for owning and delivering high-quality CIQ
              releases with consistent excellence and reliability.
            </p>
          </div>
          <div className="ach-card">
            <div className="ach-award">Individual Award</div>
            <h3 className="ach-title">High Five</h3>
            <p className="ach-desc">
              Commended for maintaining high-quality standards and dedication across all
              assigned responsibilities throughout the engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

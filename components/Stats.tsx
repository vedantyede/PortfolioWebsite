import React from 'react'

export const Stats = () => {
  return (
    <section id="stats" aria-label="Key metrics">
      <div className="stats-texture" aria-hidden="true" />
      <div className="container">
        <div className="stats-grid">
          {[
            { number: "5+", label: "Years of Experience" },
            { number: "40%", label: "Load Time Reduction" },
            { number: "80%", label: "Test Coverage Achieved" },
            { number: "60%", label: "Performance Improvement" },
          ].map((stat, i) => (
            <div className="stat-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

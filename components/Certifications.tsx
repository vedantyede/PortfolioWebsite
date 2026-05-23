import React from 'react'

export const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Credentials</div>
          <h2 className="section-title-xl">
            Certifi
            {/* <br /> */}
            <em>cations</em>
          </h2>
        </div>
        <div className="cert-list reveal">
          {[
            {
              num: "01",
              name: "React — The Complete Guide",
              provider: "incl. Next.js, Redux · Udemy",
            },
            {
              num: "02",
              name: "Modern JavaScript From The Beginning 2.0",
              provider: "Udemy",
            },
            {
              num: "03",
              name: "Web Design Modern Single Page Website",
              provider: "Bootstrap · Udemy",
            },
            {
              num: "04",
              name: "Claude Code in Action",
              provider: "Anthropic Education",
            },
          ].map((cert, i) => (
            <div className="cert-item" key={i}>
              <div className="cert-num">{cert.num}</div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-provider">{cert.provider}</div>
              </div>
              <div className="cert-arrow" aria-hidden="true">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

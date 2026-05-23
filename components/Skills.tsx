import React from 'react'

export const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="skills-grid reveal">
          <div className="skills-sidebar">
            <div className="skills-sidebar-title">
              Technical
              <br />
              <em>Arsenal</em>
            </div>
            <div className="skills-subtitle">
              Full-Stack Capable
              <br />
              Frontend Focused
            </div>
          </div>
          <div className="skills-content">
            {[
              {
                cat: "Frontend",
                tags: [
                  "React", "Next.js", "TypeScript", "JavaScript ES6+",
                  "HTML", "CSS", "Sass/SCSS", "Tailwind CSS", "Material-UI",
                ],
              },
              {
                cat: "State & Data",
                tags: ["Redux", "TanStack Query", "SWR", "React Router"],
              },
              {
                cat: "Testing",
                tags: ["Jest", "React Testing Library", "Cypress", "Enzyme"],
              },
              {
                cat: "Backend & APIs",
                tags: ["Node.js", "Express.js", "REST API", "Ag-Grid SSRM"],
              },
              {
                cat: "Tools & Cloud",
                tags: ["AWS", "GitHub Actions CI/CD", "Webpack", "Git"],
              },
              {
                cat: "Practices",
                tags: [
                  "WCAG Accessibility", "Performance Optimization",
                  "Agile", "AI-Assisted Dev",
                ],
              },
            ].map((row, i) => (
              <div className="skill-row" key={i}>
                <div className="skill-cat">{row.cat}</div>
                <div className="skill-tags">
                  {row.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

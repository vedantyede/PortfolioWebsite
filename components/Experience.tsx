import React from 'react'

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Work Experience</div>
          <h2 className="section-title-xl">
            Where I&apos;ve
            <br />
            <em>Shipped</em>
          </h2>
        </div>
        <div className="exp-list">
          {/* Ascendion */}
          <div className="exp-item reveal">
            <div className="exp-left">
              <div className="exp-date">Aug 2025 — Present</div>
              <div className="exp-company">Ascendion Engineering</div>
              <div className="exp-location">Pune, India</div>
            </div>
            <div className="exp-right">
              <div className="exp-role">
                Senior Software Engineer
                <br />
                <em>Frontend Developer</em>
              </div>
              <ul className="exp-highlights">
                <li>
                  Led frontend development with{" "}
                  <strong>Next.js, TypeScript, Ag-Grid (SSRM)</strong> and SWR,
                  delivering high-performance, scalable applications for enterprise
                  clients.
                </li>
                <li>
                  Reduced initial load times by <strong>40%</strong> for datasets
                  exceeding 100k records by implementing Ag-Grid with Server-Side Row
                  Models and optimized pagination/filtering logic.
                </li>
                <li>
                  Leveraged SWR for optimized data fetching — caching, revalidation,
                  optimistic UI updates and conditional fetching — improving performance
                  and UX.
                </li>
                <li>
                  Increased test coverage to <strong>80%</strong> and reduced regression
                  issues by <strong>35%</strong> using Jest and React Testing Library.
                </li>
                <li>
                  Utilized AI tools to accelerate development, debug complex issues and
                  automate repetitive tasks, improving overall efficiency by{" "}
                  <strong>30%</strong>.
                </li>
              </ul>
            </div>
          </div>

          {/* Persistent */}
          <div className="exp-item reveal">
            <div className="exp-left">
              <div className="exp-date">Aug 2021 — Jul 2025</div>
              <div className="exp-company">Persistent Systems</div>
              <div className="exp-location">Pune, India</div>
            </div>
            <div className="exp-right">
              <div className="exp-role">
                Lead Software Engineer
                <br />
                <em>React Developer</em>
              </div>
              <ul className="exp-highlights">
                <li>
                  Architected a cloud-based Kanban platform (Chessboard) for{" "}
                  <strong>10,000+ active users</strong>, with real-time data sync via
                  TanStack Query and complex drag-and-drop interfaces.
                </li>
                <li>
                  Engineered a secure database connector for{" "}
                  <strong>CrowdStrike</strong>, achieving a{" "}
                  <strong>60% increase in application speed</strong> through efficient
                  state management with React, Redux and TypeScript.
                </li>
                <li>
                  Developed a comprehensive KPI dashboard and analytics component
                  library, accelerating retail reporting by <strong>30%</strong> and
                  reducing future dev time by <strong>25%</strong>.
                </li>
                <li>
                  Ensured full compliance with <strong>WCAG 2.0</strong> web
                  accessibility standards across all products.
                </li>
                <li>
                  Achieved a <strong>40% improvement in Lighthouse scores</strong>{" "}
                  through React state optimization, UI/UX enhancements and robust
                  authentication practices.
                </li>
                <li>
                  Designed comprehensive unit and end-to-end test suites achieving{" "}
                  <strong>80% coverage</strong> with Jest, React Testing Library and
                  Cypress.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

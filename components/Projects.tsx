import React from 'react'

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <div className="section-label">Featured Projects</div>
          <h2 className="section-title-xl">
            Notable
            <br />
            <em>Builds</em>
          </h2>
        </div>
        <div className="projects-grid reveal">
          {[
            {
              num: "01 / CrowdStrike",
              name: "Chessboard",
              client: "Project Management Tool",
              desc: "A Smartsheet-like platform for tracking staff involvement across projects with real-time drag-and-drop, automated workflows, and live data sync for 10,000+ active users.",
              tech: ["React", "Redux", "TypeScript", "TanStack Query", "Jest"],
            },
            {
              num: "02 / CrowdStrike",
              name: "Database Connector",
              client: "Security Intelligence Platform",
              desc: "Secure user interfaces for data input, retrieval and storage across databases — achieving a 60% performance improvement through efficient state management and code optimization.",
              tech: ["React", "Redux", "TypeScript", "REST API"],
            },
            {
              num: "03 / E-Commerce SaaS",
              name: "KPI Dashboard",
              client: "Retail Analytics Platform",
              desc: "Comprehensive analytics dashboard and reusable component library accelerating retail reporting cycles by 30% and reducing future development time by 25%.",
              tech: ["React", "Redux", "Chart.js", "Sass"],
            },
            {
              num: "04 / Enterprise",
              name: "Ag-Grid SSRM",
              client: "High-Volume Data Platform",
              desc: "Server-Side Row Model implementation handling 100k+ record datasets with pagination, sorting, filtering and grouping — cutting initial load time by 40%.",
              tech: ["Next.js", "Ag-Grid", "SWR", "TypeScript"],
            },
          ].map((p, i) => (
            <article className="project-card" key={i}>
              <div className="project-num">{p.num}</div>
              <h3 className="project-name">{p.name}</h3>
              <div className="project-client">{p.client}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

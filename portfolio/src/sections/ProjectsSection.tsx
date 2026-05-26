import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const ProjectsSection = () => {
  return (
    <section className="section-container space-y-8">

      <h2 className="sub-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {project.shortDescription}
                </p>
              </div>
              <div>
                {project.startDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} - {project.endDate?.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to={`/projects/${project.id}`}
                className="inline-flex rounded-xl border border-white px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
              >
                View details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection;
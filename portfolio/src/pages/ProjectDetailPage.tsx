import { Link, useParams } from 'react-router-dom'
import { getProjectById } from '../data/projects'

const ProjectDetailPage = () => {
  const { projectId } = useParams()
  const project = getProjectById(projectId ?? '')

  if (!project) {
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-neutral-400">Project not found.</p>
          <Link
            to="/"
            className="inline-flex rounded-xl border border-white px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Back to home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <article className="mx-auto max-w-4xl space-y-8">
        <Link
          to="/"
          className="inline-flex rounded-xl border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition hover:border-white hover:text-white"
        >
          ← Back
        </Link>

        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          {project.page}
        </header>

        <section className="flex flex-wrap gap-4">
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Repository
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Demo
            </a>
          )}
        </section>
      </article>
    </main>
  )
}

export default ProjectDetailPage

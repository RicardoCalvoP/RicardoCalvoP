import PresentationSection from '../sections/PresentationSection'
import ProjectsSection from '../sections/ProjectsSection'

const HomePage = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white mx-auto">
      <PresentationSection />
      <hr />
      <ProjectsSection />
    </main>
  )
}

export default HomePage

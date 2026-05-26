import { ContactContainer } from '../components/ui/ContactContainer';
import { RiArrowDownWideLine } from "react-icons/ri";
import StackContainer from '../components/ui/StackContainer'
import StackImages from '../data/StackList';

const PresentationSection = () => {
  return (
    <section className="section-container min-h-screen flex flex-col justify-between">
      <div className="flex flex-col justify-center flex-1">

        <header className="space-y-4 max-w-7/10">
          <p className="sub-heading">
            Tecnológico de Monterrey · Computer Engineering Student
          </p>

          <div className="space-y-8">
            <div>
              <h1 className="title">
                Ricardo Calvo
              </h1>
              <ContactContainer />
            </div>
            <p className="main-description">
              Eighth-semester student focused on software development, web
              applications, and building products with strong architecture.
            </p>
            <StackContainer icons={StackImages} />
          </div>
        </header>
      </div>
      <div className="flex items-center justify-center  animate-bounce">
        <RiArrowDownWideLine size={30} />
      </div>
    </section>
  )
}

export default PresentationSection;
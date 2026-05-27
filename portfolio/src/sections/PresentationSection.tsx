import { ContactContainer } from '../components/ui/ContactContainer';
import { RiArrowDownWideLine } from "react-icons/ri";
import StackContainer from '../components/ui/StackContainer'
import StackImages from '../data/StackList';

const PresentationSection = () => {
  return (
    <section className="section-container">

      {/* flex-1 hace que este bloque ocupe todo el espacio menos la flecha    */}
      {/* justify-center centra el contenido verticalmente dentro de ese espacio */}
      <div className="flex flex-col justify-center flex-1">
        <div className="w-[70%] space-y-8 mb-10">

          <header className="space-y-4">
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
            </div>
          </header>

          <div className="w-full">
            <StackContainer icons={StackImages} />
          </div>

        </div>
      </div>

      {/* Sin flex-1: la flecha toma solo su tamaño natural y queda al fondo  */}
      <div className="flex items-center justify-center animate-bounce pb-4">
        <RiArrowDownWideLine size={30} />
      </div>

    </section>
  )
}

export default PresentationSection;
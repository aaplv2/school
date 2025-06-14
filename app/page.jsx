import { Button } from "@/components/ui/button";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full flex-grow flex flex-col">
      <div className="container mx-auto flex-grow flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Pequeño subtítulo</span>
            <h1 className="h1 mb-6">
              Hola <br />
              <span className="text-accent">Nombre de escuela</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Breve descripción de la escuela, a manera que resuma lo que hace y
              un par de caracteristicas, no debe ser mayor a tres lineas
            </p>
            {/* boton y redes */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Tomar clases</span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
        <Stats />
    </section>
  );
};

export default Home;

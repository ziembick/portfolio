import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110
    px]"
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Paulo Ziembick</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Paulo Ziembick e sou desenvolvedor front-end
            apaixonado por tecnologia. Meu objetivo é criar interfaces de
            usuário bonitas e funcionais e participar em projetos desafiadores.
            Estou sempre aberto a novas oportunidades e desafios.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>
          <div>contato</div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/profile-pic.jpg"
          alt="Foto de Perfil Paulo Ziembick"
        />
      </div>
    </section>
  );
};

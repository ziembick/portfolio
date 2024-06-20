"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";

// import { TbBrandGithub, TbBrandLinkedin, TbBrandYoutube, TbBrandWhatsapp} from 'react-icons/tb'
// const MOCK_CONTACTS = [
//   {
//     url: 'https://github.com.br',
//     icon: <TbBrandGithub/>
//   },
//   {
//     url: 'https://linkedin.com.br',
//     icon: <TbBrandLinkedin/>
//   },
//   {
//     url: 'https://youtube.com.br',
//     icon: <TbBrandYoutube/>
//   },
//   {
//     url: 'https://youtube.com.br',
//     icon: <TbBrandWhatsapp/>
//   },
// ]

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const whatsApp = `https://wa.me/5511985396680?text=Olá, gostaria de conversar sobre projetos ou carreira!`
    window.open(whatsApp, '_blank')
  };

  return (
    <section
      className="w-full lg:h-[755px] bg-gray-950 flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110
    px]"
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-customPurple">Olá, meu nome é</p>
          <h2 className="text-4xl font-mono mt-2">Paulo Ziembick</h2>
          <div className="text-gray-400 font-mono my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex font-mono flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center font-mono sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button font-mono" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className=" text-2xl text-gray-600 font-mono flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  className="hover:text-gray-100 font-mono transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg}/>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5}}
          whileInView={{ opacity: 1, y: 0, scale: 1}}
          exit={{ opacity: 0, y: 200, scale: 0.5}}
          transition={{ duration: 0.5}}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de Perfil Paulo Ziembick"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

'use client'

import { ProjectSection } from "@/app/types/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

type ProjectSectionsProps = {
  sections: ProjectSection[];
};

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section, i) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12 font-mono"
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1}}
        >
          <h2 className="text-2xl md:text-3xl font-mono text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            alt={`Imagem da sessão ${section.title}`}
            width={1080}
            height={682}
            className="w-full aspect-auto rounded-lg object-cover"
          />
        </motion.div>
      ))}
    </section>
  );
};

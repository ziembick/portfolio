"use client";

import { SectionTitle } from "@/app/components/section-title";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { motion } from "framer-motion";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-gray-950 flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl font-mono"
      />
      <motion.div
        className="flex flex-col items-center font-mono"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base font-mono">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} className="text-customPurple"/>
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  );
};

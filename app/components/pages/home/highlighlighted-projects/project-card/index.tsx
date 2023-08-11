import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://portfolio-tutorial-2023.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FqSXcz2JdTMOPKlteRZKY&w=640&q=75"
          alt="Thumbnail do Projeto Bookwise"
          className="lg:min-h-full object-cover rounded-lg"
          // w-full h-[200px] sm:h-[300px] lg:w-[450px] add to classname if needed
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image 
          width={20}
          height={20}
          alt=""
          src="/images/icons/project-title-icon.svg"
          />
          Bookwise
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum expedita recusandae aperiam sed illum repellat ducimus modi excepturi fugiat? Reprehenderit inventore perferendis, hic in consequuntur impedit molestiae aperiam sequi soluta.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js"/>
          <TechBadge name="Next.js"/>
          <TechBadge name="Next.js"/>
          <TechBadge name="Next.js"/>
          <TechBadge name="Next.js"/>
          <TechBadge name="Next.js"/>
        </div>

        <Link href="/projects/book-wise" className="flex items-center gap-2 text-sm">
          Ver projeto
          <HiArrowNarrowRight size={18}/>
        </Link>
      </div>
    </div>
  );
};

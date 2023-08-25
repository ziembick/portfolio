import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit
          quam aperiam error animi. Aut mollitia voluptatum non, sunt animi rem
          nesciunt repellat corporis aperiam repellendus reiciendis optio ab?
          Sequi.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

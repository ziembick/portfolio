import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/home/known-techs";
import { HighLightedProjects } from "./components/pages/home/highlighlighted-projects";
import { WorkExperience } from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection/>
      <KnownTechs />
      <HighLightedProjects />
      <WorkExperience />
    </>
  )
}

// languages
import languagesLogos from "./logos/languageLogos";
import skillsLogos from "./logos/frameworkLogos";
import databaseToolsLogos from "./logos/databaseToolsLogos";
import nonProgrammingLogos from "./logos/nonProgrammingLogos";
import { Skill } from "./Skill/Skill";
import { SkillNoDescription } from "./Skill/SkillVertDescription";

const Skills = () => {
  const languages = languagesLogos.map((eachLogo) => {
    return <Skill key={eachLogo.name} logo={eachLogo} />;
  });

  const skills = skillsLogos.map((eachLogo) => {
    return <Skill key={eachLogo.name} logo={eachLogo} />;
  });

  const dbOtherTools = databaseToolsLogos.map((eachLogo) => {
    return <Skill key={eachLogo.name} logo={eachLogo} />;
  });

  const nonProgramming = nonProgrammingLogos.map((eachLogo) => {
    return <SkillNoDescription key={eachLogo.name} logo={eachLogo} />;
  });

  return (
    <section
      id="skills"
      className="px-4 py-14 bg-cloud-blue-600 flex flex-col items-center sm:py-28"
    >
      <h3 className="text-center text-white text-xl font-bold sm:text-3xl">
        Programming Skills
      </h3>
      <p className="py-6 text-center text-gray-300 text-sm sm:text-lg sm:py-12">
        I have used these to build web and mobile apps
      </p>
      <div
        id="programming-skills-container"
        className="flex justify-between w-full sm:max-w-5xl gap-4"
      >
        <div id="languages-container" className="w-1/3">
          <p className="mb-4 text-white  text-center text-sm font-bold sm:mb-8 sm:text-xl">
            Languages & Runtime
          </p>
          <div className="flex flex-col gap-2 md:ml-14">{languages}</div>
        </div>
        <div id="libraries-frameworks-container" className="w-1/3">
          <p className="mb-4 text-white text-center text-sm font-bold sm:mb-8 sm:text-xl">
            Libraries & Frameworks
          </p>
          <div className="flex flex-col gap-2 md:ml-14">{skills}</div>
        </div>
        <div id="database-tools-container" className="w-1/3">
          <p className="mb-4 text-white text-center text-sm font-bold sm:mb-8 sm:text-xl">
            Databases & Other Tools
          </p>
          <div className="flex flex-col gap-2 md:ml-14">{dbOtherTools}</div>
        </div>
      </div>
      <div id="non-programming-skills-container mx-4">
        <h3 className="pt-12 sm:pt-24 text-center text-white text-xl font-bold sm:text-3xl">
          Non-Programming Skills
        </h3>
        <p className="pt-6 text-sm text-gray-300 text-center sm:pt-12 sm:text-lg">
          I have extensive experience with these and can use them with
          confidence
        </p>
        <div id="software-container">
          <div className="pt-6 flex justify-center gap-2 sm:pt-12 sm:gap-4">
            {nonProgramming}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

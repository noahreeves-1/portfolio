// languages
import languagesLogos from "./languageLogos";

// frameworks
import tailwindLogo from "../../assets/images/tailwind-logo.png";
import reactLogo from "../../assets/images/react-icon.png";

// tools
import gitLogo from "../../assets/images/gitlogo.png";
import gitHubLogo from "../../assets/images/githublogo.svg";
import { Skill } from "./Skill/Skill";

const Skills = () => {
  const languages = languagesLogos.map((eachLogo) => {
    return <Skill key={eachLogo.name} logo={eachLogo} />;
  });

  return (
    <section id="skills" className="py-16 bg-cloud-blue-600 sm:py-32">
      <div className="text-center">
        <p className="text-white text-lg sm:text-2xl">Languages</p>
        <div className="pt-4 flex justify-center items-center gap-4 ">
          {languages}
        </div>
      </div>
      <div className="text-center">
        <div className="pt-8 text-white text-lg sm:text-2xl">Libraries</div>
        <div className="flex justify-center items-center gap-4">
          <div className="group">
            <img
              src={tailwindLogo}
              alt="tailwind logo"
              className="mb-3 w-16 group-hover:-translate-y-2 duration-500"
            ></img>
            {/* <p className="opacity-0 transition-all group-hover:opacity-100 font-semibold">
              Tailwind
            </p> */}
          </div>
          <div className="group">
            <img
              src={reactLogo}
              alt="react logo"
              className="w-12 mb-4 group-hover:-translate-y-2 duration-500"
            ></img>
            {/* <p className="opacity-0 transition-all group-hover:opacity-100 font-semibold">
              React
            </p> */}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-white text-lg sm:text-2xl">Tools</div>
        <div className=" flex justify-center items-center gap-4">
          <div className="group">
            <img
              src={gitLogo}
              alt="git logo"
              className="w-16 group-hover:-translate-y-2 duration-500"
            ></img>
          </div>
          <div className="group">
            <img
              src={gitHubLogo}
              alt=""
              className="w-8 group-hover:-translate-y-2 duration-500"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

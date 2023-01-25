// languages
import languagesLogos from "./languageLogos";

// frameworks
import tailwindLogo from "../../assets/tailwind-logo.png";
import reactLogo from "../../assets/react-icon.png";

// tools
import gitLogo from "../../assets/gitlogo.png";
import gitHubLogo from "../../assets/githublogo.svg";
import firebaseLogo from "../../assets/firebase-logo.png";
import { Skill } from "./Skill/Skill";

const Skills = () => {
  const languages = languagesLogos.map((eachLogo) => {
    return <Skill key={eachLogo.name} logo={eachLogo} />;
  });

  return (
    <section id="skills" className="pt-16">
      <div className="text-center">
        <p className="font-bold">Languages</p>
        <div className="pt-4 flex justify-center items-center gap-4 ">
          {languages}
        </div>
      </div>
      <div className="text-center">
        <div className="pt-8 font-bold">Libraries</div>
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
        <div className="font-bold">Tools</div>
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

import { useIntersection } from "../../hooks/useOnScreen";
import { Project } from "./Project/Project";
import { projectsData } from "./projectsData/projectsData";

export const Projects = () => {
  const [projectHeaderRefIsIntersecting, projectHeaderRef] = useIntersection();
  const [projectsRefIsIntersecting, projectsRef] = useIntersection();

  return (
    <section id="projects" className="max-w-5xl m-4 mx-auto animate-fadeUp">
      <div
        ref={projectHeaderRef}
        className={
          projectHeaderRefIsIntersecting ? "animate-fadeUp" : "opacity-0"
        }
      >
        <h2 className="text-center text-xl sm:text-3xl">Coding Projects</h2>
        <p className="pt-4 px-4 sm:pt-8 text-sm sm:text-lg">
          I learned how to code full-stack through{" "}
          <span className="text-blue-500">
            <a href="https://www.theodinproject.com/">The Odin Project</a>
          </span>
          . I created over 20 different applications. I viewed these mainly as
          learning exercises so I can practice on many different projects and
          expand my skillset as fast as possible. Anyway, here are some of the
          projects I did:
        </p>
        <p className="my-2 text-center text-sm text-orange-300 italic sm:text-lg sm:my-4">
          FYI my focus was on functionality over design
        </p>
      </div>
      <div
        ref={projectsRef}
        className={
          projectsRefIsIntersecting
            ? "px-4 animate-fadeUp sm:px-8"
            : "opacity-0"
        }
      >
        <ul className="text-sm mx-4 sm:mx-8 sm:text-lg">
          {projectsData.map((eachProject, index) => {
            return <Project project={eachProject} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};

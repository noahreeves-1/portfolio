import React from "react";
import { IProject } from "../projectsData/projectsData";

interface ProjectProps {
  project: IProject;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  if (project.picSources.length > 0) {
    return (
      <li className="my-4 sm:my-8">
        <a href={project.src} target="_blank">
          <ul className="flex gap-2 my-2 sm:my-4">
            {project.picSources.map((eachPic, index) => {
              return (
                <li key={index}>
                  <img
                    src={eachPic}
                    alt="project screenshot"
                    className="w-full h-auto rounded-md border-2"
                  />
                </li>
              );
            })}
          </ul>
          <p className="text-blue-500">
            {project.name}{" "}
            <span className="text-black">
              - {project.techStack} - {project.description}{" "}
            </span>
            <span className="text-red-400">{project.warning}</span>
          </p>
        </a>
      </li>
    );
  } else {
    return (
      <li className="my-4 sm:my-8">
        <a href={project.src} target="_blank">
          <p className="text-blue-500">
            {project.name}{" "}
            <span className="text-black">
              - {project.techStack} - {project.description}{" "}
            </span>
            <span className="text-red-400">{project.warning}</span>
          </p>
        </a>
      </li>
    );
  }
};

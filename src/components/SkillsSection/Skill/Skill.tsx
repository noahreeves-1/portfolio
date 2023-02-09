import * as React from "react";
import { ILogo } from "../logos/languageLogos";

export interface SkillProps {
  logo: ILogo;
}

export const Skill: React.FC<SkillProps> = ({ logo }) => {
  return (
    <div className="text-gray-300 flex items-center transition-all hover:-translate-y-2 hover:text-white duration-500">
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width || 24}
        loading="lazy"
        className="sm:w-14"
      ></img>
      <p className="ml-2 text-xs sm:text-lg">{logo.name}</p>
    </div>
  );
};

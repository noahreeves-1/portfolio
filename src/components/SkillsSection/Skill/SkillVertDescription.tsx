import * as React from "react";
import { ILogo } from "../logos/languageLogos";

export interface SkillProps {
  logo: ILogo;
}

export const SkillNoDescription: React.FC<SkillProps> = ({ logo }) => {
  return (
    <div className="text-gray-300 flex flex-col items-center transition-all hover:-translate-y-2 duration-500 hover:text-white">
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width || 24}
        className="sm:w-14"
      ></img>
      <p className="text-xs sm:text-lg">{logo.name}</p>
    </div>
  );
};

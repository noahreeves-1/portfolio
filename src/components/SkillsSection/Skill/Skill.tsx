import * as React from "react";
import { LanguageLogo } from "../languageLogos";

export interface SkillProps {
  logo: LanguageLogo;
}

export const Skill: React.FC<SkillProps> = ({ logo }) => {
  return (
    <div className="group">
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width || 40}
        className="group-hover:-translate-y-2 duration-500"
      ></img>
      {/* <p className="opacity-0 transition-all group-hover:opacity-100 font-semibold text-xs">
        {logo.name}
      </p> */}
    </div>
  );
};

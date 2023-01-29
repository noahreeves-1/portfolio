import React from "react";
import { Link } from "react-router-dom";
import { INavBarData } from "../NavbarData";

export interface MenuProps {
  links: INavBarData[];
}

export const WebMenu: React.FC<MenuProps> = ({ links }) => {
  return (
    <div className="hidden sm:block">
      <div className="text-zinc-400 flex gap-4 items-center shadow-md border border-zinc-300 rounded-full px-4 py-2 bg-white text-sm">
        {links.map(({ title, path }, index) => {
          if (path.startsWith("/")) {
            return (
              <Link
                key={index}
                to={path}
                className="hover:text-zinc-500 cursor-pointer sm:text-base"
              >
                {title}
              </Link>
            );
          } else {
            return (
              <a href={path}>
                <p className="hover:text-zinc-500 cursor-pointer sm:text-base">
                  {title}
                </p>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

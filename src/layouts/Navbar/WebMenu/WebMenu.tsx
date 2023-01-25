import React from "react";
import { Link } from "react-router-dom";
import { INavBarData } from "../NavbarData";

export interface MenuProps {
  links: INavBarData[];
}

export const WebMenu: React.FC<MenuProps> = ({ links }) => {
  return (
    <div className="sm:block hidden mt-2">
      <div className="text-zinc-400 flex gap-4 items-center shadow-md border border-zinc-300 rounded-full px-4 py-2 bg-white text-sm">
        {links.map(({ title, path }, index) => {
          return (
            <Link
              key={index}
              to={path}
              className="hover:text-zinc-500 cursor-pointer"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

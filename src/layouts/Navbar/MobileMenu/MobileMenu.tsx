import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { INavBarData } from "../NavbarData";
import { MouseEventHandler } from "react";

export interface MenuProps {
  links: INavBarData[];
  close: MouseEventHandler<HTMLParagraphElement>;
}

export const MobileMenu: React.FC<MenuProps> = ({ links, close }) => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
    window.addEventListener("resize", (e) => {
      const w = e.target as Window;
      if (w.innerWidth >= 640) {
        close;
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div>
      <div className="fixed inset-0 top-0 1-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60"></div>
      <div className="fixed inset-0 top-0 1-0 p-5">
        <div
          className={`w-full bg-white rounded-xl p-5 transition-all ${
            animation ? "scale-100" : "scale-95"
          }`}
        >
          <div className=" flex items-center justify-between">
            <h1
              className="font-bold text-cyan-900
            "
            >
              Navigation
            </h1>
            <p
              className="font-bold hover:scale-110 transition-all cursor-pointer"
              onClick={close}
            >
              X
            </p>
          </div>
          <div className="mt-4 divide-y">
            {links.map(({ title, path }, index) => {
              return (
                <Link
                  key={index}
                  to={path}
                  className="py-2 text-zinc-500 hover:text-cyan-900 cursor-pointer block"
                >
                  <p onClick={close}>{title}</p>
                </Link>
              );
            })}
            <div className="py-2 text-zinc-500 hover:text-cyan-900 cursor-pointer">
              <Link to="/somewhere">Somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

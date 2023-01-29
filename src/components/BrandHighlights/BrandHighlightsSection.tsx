import * as React from "react";
import { brandLogos } from "./BrandsData";
import { Brand } from "./Brand/Brand";

export const BrandHighlights: React.FC = () => {
  return (
    <div className="py-10 bg-white sm:py-20">
      <h2 className="py-8 text-lg text-center text-zinc-400 sm:py-16 sm:text-3xl">
        Formerly at
      </h2>
      <div className="relative py-4 shadow flex overflow-x-hidden items-center">
        <ul className="flex items-center w-full animate-marquee">
          {brandLogos.map((brand) => {
            return (
              <li
                key={brand.name}
                className="mx-2 flex-grow hover:scale-110 duration-500"
              >
                <Brand brand={brand} />
              </li>
            );
          })}
        </ul>
        <ul className="absolute flex items-center w-full animate-marquee2">
          {brandLogos.map((brand) => {
            return (
              <li
                key={brand.name}
                className="mx-2 flex-grow hover:scale-110 duration-500"
              >
                <Brand brand={brand} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-4 flex flex-col gap-2 pt-8 text-center text-sm text-zinc-400 sm:text-2xl sm:pt-16 sm:gap-4">
        <p>
          Advising
          <span className="text-cloud-blue-600 font-bold"> Fortune 500 </span>
          companies
        </p>
        <p>
          Winning 2015{" "}
          <span className="text-cloud-blue-600 font-bold">
            Franchisee of the Year
          </span>
        </p>
        <p>
          Rising to{" "}
          <span className="text-cloud-blue-600 font-bold">
            Marketing Manager
          </span>{" "}
          from unpaid Intern
        </p>
      </div>
    </div>
  );
};

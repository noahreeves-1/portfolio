import * as React from "react";
import { brandLogos } from "./BrandsData";
import { Brand } from "./Brand/Brand";

export const BrandHighlights: React.FC = () => {
  return (
    <div>
      <h2 className="my-4 text-center text-sm text-zinc-500">Formerly At</h2>
      {/* // * TRY 7 - componentize */}
      <div className="relative py-4 shadow flex overflow-x-hidden items-center">
        <ul className="flex items-center w-full animate-marquee">
          {brandLogos.map((brand) => {
            return (
              <li className="mx-2 flex-grow hover:scale-110 duration-500">
                <Brand key={brand.name} brand={brand} />
              </li>
            );
          })}
        </ul>
        <ul className="absolute flex items-center w-full animate-marquee2">
          {brandLogos.map((brand) => {
            return (
              <li className="mx-2 flex-grow hover:scale-110 duration-500">
                <Brand key={brand.name} brand={brand} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

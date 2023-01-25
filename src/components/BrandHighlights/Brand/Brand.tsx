import * as React from "react";
import { IBrandLogo } from "../BrandsData";

export interface BrandProps {
  brand: IBrandLogo;
}

export const Brand: React.FC<BrandProps> = ({ brand }) => {
  return (
    <a href={brand.url} target="_blank">
      <img
        src={brand.src}
        alt={brand.alt}
        className="w-full max-w-carousel-max-w h-auto"
      ></img>
    </a>
  );
};

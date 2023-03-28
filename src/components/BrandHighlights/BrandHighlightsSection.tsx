import React, { useEffect, useState } from "react";
import { brandLogos } from "./BrandsData";
import { Brand } from "./Brand/Brand";
import { useIntersection } from "../../hooks/useOnScreen";

export const BrandHighlights: React.FC = () => {
  const [logosRefIsIntersecting, logosRef] = useIntersection();
  const [carouselRefIsIntersecting, carouselRef] = useIntersection();
  const [brandDetailsRefIsIntersecting, brandDetailsRef] = useIntersection();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [brandDetailsRefIsIntersecting]);

  const brandOneTag = document.getElementById("brandTagOne");

  const brandOneTagRect = brandOneTag?.getBoundingClientRect();
  const brandOneTagRectDiff = brandOneTagRect?.bottom! - offsetY;

  const styleSlideInFromLeft = {
    transform: `translateX(${Math.min(-brandOneTagRectDiff - 400, 0)}px)`,
  };
  const styleSlideInFromRight = {
    transform: `translateX(${Math.max(brandOneTagRectDiff + 400, 0)}px)`,
  };
  const styleSlideInFromRight2 = {
    transform: `translateX(${Math.max(brandOneTagRectDiff + 400, 0)}px)`,
  };

  return (
    <section id="highlights" className="pb-10 animate-fadeUp sm:pb-20">
      <div ref={logosRef}>
        <h2
          className={
            logosRefIsIntersecting
              ? "pb-8 text-xl text-center text-zinc-400 font-extrabold animate-fadeUp sm:pb-16 sm:text-3xl"
              : "opacity-0"
          }
        >
          Formerly At
        </h2>
        <div
          ref={carouselRef}
          className={
            carouselRefIsIntersecting
              ? "relative py-4 bg-white shadow flex overflow-x-hidden items-center animate-fadeUp"
              : "opacity-0"
          }
        >
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
      </div>
      <div
        ref={brandDetailsRef}
        className={
          brandDetailsRefIsIntersecting
            ? "px-4 flex flex-col gap-2 pt-8 text-center text-sm text-zinc-400 animate-fadeUp overflow-hidden sm:text-2xl sm:pt-16 sm:gap-4"
            : "opacity-0"
        }
      >
        <p
          id="brandTagOne"
          style={styleSlideInFromRight}
          className="whitespace-nowrap"
        >
          Advising
          <span className="text-cloud-blue-500 font-bold"> Fortune 500 </span>
          companies
        </p>
        <p style={styleSlideInFromLeft}>
          Winning 2015{" "}
          <span className="text-cloud-blue-500 font-bold">
            Franchisee of the Year
          </span>
        </p>
        <p style={styleSlideInFromRight2}>
          Rising to{" "}
          <span className="text-cloud-blue-500 font-bold">
            Marketing Manager
          </span>{" "}
          from unpaid intern
        </p>
      </div>
    </section>
  );
};

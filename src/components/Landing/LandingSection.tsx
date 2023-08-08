import "./landingSection.css";
import { LandingTitleButton } from "./TitleButtons/LandingTitleButton";
import { landingTitlesData } from "./TitleButtons/landingTitlesData";
import { TitleDetails } from "./TitleButtons/TitleDetails/TitleDetails";
import { ITitlesData } from "./TitleButtons/landingTitlesData";
import { useEffect, useState } from "react";
import { WavyBottom } from "../WavyTransition/WavyBottom";

export function LandingSection() {
  const [selectedTitle, setSelectedTitle] = useState<ITitlesData | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styleWelcomeMessage = {
    transform: `translateX(${offsetY * 0.7}px)`,
  };
  const styleParallaxLeft = {
    transform: `translateX(${offsetY * -0.3}px)`,
  };
  const styleOneLiner = {
    transform: `translateX(${offsetY * 0.1}px)`,
  };

  return (
    <div>
      <section
        id="home"
        className="pt-24 pb-6 mx-auto text-white bg-cloud-blue-800 overflow-hidden sm:pt-48 sm:pb-24"
      >
        <div className="px-4 max-w-5xl mx-auto">
          <div className="welcome-message" style={styleWelcomeMessage}>
            <h2 className="text-5xl sm:text-8xl">Hi I'm Noah.</h2>
            <h2 className="text-5xl sm:text-8xl">Hi I'm Noah.</h2>
          </div>
          <div
            className="flex gap-5 py-2 sm:py-10 sm:gap-10"
            style={styleParallaxLeft}
          >
            <p className="pt-8 animate-slideInDown2 sm:text-2xl">
              Self-Starter
            </p>
            <p className="pt-8 animate-slideInDown1 sm:text-2xl">Planner</p>
            <p className="pt-8 animate-slideInDown3 sm:text-2xl">Dreamer</p>
          </div>
          <div style={styleOneLiner}>
            <p className="one-liner animate-slideInLeft text-sm sm:text-xl">
              I'm a management consultant turned software engineer currently
              working on an app idea I have. I quit my job and traveled abroad
              for a year while learning how to code, and it was all worth it.
            </p>
          </div>
          <div
            id="titles"
            className="pt-14 text-sm flex gap-4 justify-around sm:text-xl"
          >
            {landingTitlesData.map((eachTitle, index) => {
              return (
                <LandingTitleButton
                  key={index}
                  titleData={eachTitle}
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              );
            })}
          </div>
          <div id="title-details">
            <TitleDetails selectedTitle={selectedTitle} />
          </div>
        </div>
      </section>
      <WavyBottom color="fill-cloud-blue-800" />
    </div>
  );
}

import { experienceData } from "./experienceData/experienceData";
import { ExperienceLeft } from "./Experience/ExperienceLeft";
import { ExperienceRight } from "./Experience/ExperienceRight";
import { WavyTop } from "../WavyTransition/WavyTop";
import { WavyBottom } from "../WavyTransition/WavyBottom";

export function CareerSection() {
  return (
    <div>
      <WavyTop color="fill-slate-100" />
      <section
        id="career"
        className="py-14 sm:py-28 flex justify-center bg-slate-100"
      >
        <div className="px-4 max-w-5xl w-full">
          <h2 className="text-center text-xl font-bold sm:text-3xl">
            My Career Journey
          </h2>
          <ul>
            {experienceData.map((eachExp, index) => {
              if (index % 2 === 0) {
                return <ExperienceLeft experience={eachExp} key={index} />;
              } else {
                return <ExperienceRight experience={eachExp} key={index} />;
              }
            })}
          </ul>
        </div>
      </section>
      <WavyBottom color="fill-slate-100" />
    </div>
  );
}

import { Iexperience } from "../experienceData/experienceData";
import { useIntersection } from "../../../hooks/useOnScreen";

interface ExperienceProps {
  experience: Iexperience;
}

export const ExperienceLeft: React.FC<ExperienceProps> = ({ experience }) => {
  const [refIsIntersecting, ref] = useIntersection();

  return (
    <div
      ref={ref}
      className={
        refIsIntersecting
          ? "flex gap-4 py-8 animate-fadeUp sm:gap-8 sm:py-16"
          : "opacity-0"
      }
    >
      <div className="w-1/2 flex flex-col justify-center">
        <p className="sm:text-3xl">{experience.quote}</p>
        <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
          {experience.description}
        </p>
      </div>
      <div className="w-1/2">
        <img
          src={experience.image}
          alt={experience.imageAlt}
          loading="lazy"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

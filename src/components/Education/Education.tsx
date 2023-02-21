import { useIntersection } from "../../hooks/useOnScreen";
import tableauLogo from "../../assets/images/tableau-icon-svgrepo-com.svg";
import bluePrismLogo from "../../assets/images/blue_prism_logo.png";

export const Education = () => {
  const [eduTitleRefIsIntersecting, eduTitleRef] = useIntersection();
  const [eduDetailsRefIsIntersecting, eduDetailsRef] = useIntersection();
  const [certRefIsIntersecting, certRef] = useIntersection();
  const [certDetailsRefIsIntersecting, certDetailsRef] = useIntersection();

  return (
    <section id="education" className="flex flex-col items-center">
      <h2
        ref={eduTitleRef}
        className={
          eduTitleRefIsIntersecting
            ? "text-center text-xl animate-fadeUp sm:text-3xl"
            : "opacity-0"
        }
      >
        Education
      </h2>
      <div
        ref={eduDetailsRef}
        className={
          eduDetailsRefIsIntersecting
            ? "p-4 flex gap-4 animate-fadeUp sm:gap-8 sm:py-8"
            : "opacity-0"
        }
      >
        <div>
          <p className="font-extrabold sm:text-xl">
            Southern Methodist University
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <div>
            <p className="text-sm sm:text-lg">2016 M.S. Business Analytics</p>
          </div>
          <div>
            <p className="text-sm sm:text-lg">2015 B.B.A. Marketing</p>
          </div>
          <div>
            <p className="text-sm sm:text-lg">2015 Minor in Economics</p>
          </div>
        </div>
      </div>
      <h2
        ref={certRef}
        className={
          certRefIsIntersecting
            ? "text-center text-lg py-4 animate-fadeUp sm:text-3xl sm:py-8"
            : "opacity-0"
        }
      >
        Certifications
      </h2>
      <div
        ref={certDetailsRef}
        className={
          certDetailsRefIsIntersecting
            ? "px-4 text-center text-sm flex flex-col gap-2 animate-fadeUp sm:px-8 sm:text-lg sm:gap-4"
            : "opacity-0"
        }
      >
        <div className="mx-1 flex items-center gap-2 sm:mx-2 sm:gap-4">
          <img src={tableauLogo} alt="tableau logo" width={40} />
          <p>Tableau Developer Certified Association (Expired Feb 2021)</p>
        </div>
        <div className="mx-1 flex items-center gap-2 sm:mx-2 sm:gap-4">
          <img src={bluePrismLogo} alt="blue prism logo" width={40} />
          <p>Blue Prism Developer Certification (May 2018)</p>
        </div>
      </div>
    </section>
  );
};

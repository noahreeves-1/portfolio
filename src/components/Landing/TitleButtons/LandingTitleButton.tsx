import { ITitlesData } from "./landingTitlesData";

interface LandingTitlesProp {
  titleData: ITitlesData;
  selectedTitle: ITitlesData | null;
  setSelectedTitle: React.Dispatch<React.SetStateAction<ITitlesData | null>>;
}

export const LandingTitleButton: React.FC<LandingTitlesProp> = ({
  titleData,
  selectedTitle,
  setSelectedTitle,
}) => {
  const setDetails = () => {
    setSelectedTitle(titleData);
  };

  if (selectedTitle !== null && titleData.title === selectedTitle.title) {
    return (
      <button
        className="title-button w-40 h-40 text-center border-2 border-cloud-blue-600 bg-cloud-blue-700 animate-slideInUp rounded-md"
        onClick={setDetails}
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col">
            <div>
              <img
                src={titleData.src}
                alt={titleData.alt}
                className="mx-auto"
              />
            </div>
            <div>
              <p className="mt-4">{titleData.title}</p>
            </div>
          </div>
        </div>
      </button>
    );
  } else {
    return (
      <button
        className="title-button w-40 h-40 text-center border-2 border-white animate-slideInUp rounded-md hover:bg-cloud-blue-700 hover:border-cloud-blue-600"
        onClick={setDetails}
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col">
            <div>
              <img
                src={titleData.src}
                alt={titleData.alt}
                className="mx-auto"
              />
            </div>
            <div>
              <p className="mt-4">{titleData.title}</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
};

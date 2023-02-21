import { ITitlesData } from "../landingTitlesData";

interface TitleDetailsProps {
  selectedTitle: ITitlesData | null;
}

export const TitleDetails: React.FC<TitleDetailsProps> = ({
  selectedTitle,
}) => {
  if (selectedTitle) {
    return (
      <div className="mt-10 p-4 border-l-2 border-cloud-blue-400">
        <p className="font-extrabold sm:text-xl">{selectedTitle.title}</p>
        <ul className="mt-2 sm:mt-4 text-sm sm:text-lg">
          {selectedTitle.details.map((eachDetail, index) => {
            return (
              <li key={index} className="ml-5 mt-1 list-disc sm:ml-8 sm:mt-2">
                {eachDetail}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

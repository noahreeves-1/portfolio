import tableauLogo from "../../../assets/images/tableau-icon-svgrepo-com.svg";
import powerBiLogo from "../../../assets/images/power-bi.svg";
import excelLogo from "../../../assets/images/excel-svgrepo-com.svg";
import powerPointLogo from "../../../assets/images/powerpoint-svgrepo-com.svg";
import sharePointLogo from "../../../assets/images/ms-sharepoint-svgrepo-com.svg";
import oneDriveLogo from "../../../assets/images/ms-onedrive-svgrepo-com.svg";
import { ILogo } from "./languageLogos";

const nonProgrammingLogos: ILogo[] = [
  {
    name: "Tableau",
    src: tableauLogo,
    alt: "tableau logo",
  },
  {
    name: "Power BI",
    src: powerBiLogo,
    alt: "power bi logo",
  },
  {
    name: "PowerPoint",
    src: powerPointLogo,
    alt: "microsoft powerpoint logo",
  },
  {
    name: "Excel",
    src: excelLogo,
    alt: "microsoft excel logo",
  },
  {
    name: "SharePoint",
    src: sharePointLogo,
    alt: "microsoft sharepoint logo",
  },
  {
    name: "OneDrive",
    src: oneDriveLogo,
    alt: "microsoft onedrive logo",
  },
];

export default nonProgrammingLogos;

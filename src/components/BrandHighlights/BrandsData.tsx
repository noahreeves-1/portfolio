import accentureLogo from "../../assets/images/accenture-logo.svg";
import glassDoctorLogo from "../../assets/images/glass-doctor-logo.png";
import businessExpoLogo from "../../assets/images/business-expo-center-logo.png";
import smuLogo from "../../assets/images/smu-logo.png";
import kornFerryLogo from "../../assets/images/Korn-ferry-logo.jpg";
import rnlLogo from "../../assets/images/RNL_logo.png";

export interface IBrandLogo {
  name: string;
  src: string;
  alt: string;
  url: string;
  width?: number | string;
}

export const brandLogos: IBrandLogo[] = [
  {
    name: "Accenture",
    src: accentureLogo,
    alt: "accenture logo",
    url: "https://www.accenture.com/us-en",
  },

  {
    name: "Korn Ferry",
    src: kornFerryLogo,
    alt: "korn ferry logo",
    url: "https://www.kornferry.com/",
  },

  {
    name: "Ruffalo Noel Levitz",
    src: rnlLogo,
    alt: "ruffalo noel levitz logo",
    url: "https://www.ruffalonl.com/",
  },
  {
    name: "Glass Doctor",
    src: glassDoctorLogo,
    alt: "glass doctor logo",
    url: "https://glassdoctor.com/",
  },
  {
    name: "Business Expo Center",
    src: businessExpoLogo,
    alt: "business expo center logo",
    url: "https://www.businessexpocenter.com/",
  },
  {
    name: "Southern Methodist University",
    src: smuLogo,
    alt: "southern methodist university logo",
    url: "https://www.smu.edu/",
  },
];

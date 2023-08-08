import insightLogo from "../../../assets/images/insight.svg";
import mobileLogo from "../../../assets/images/mobile_development.svg";
import lightbulbLogo from "../../../assets/images/lightbulb.svg";

export interface ITitlesData {
  src: string;
  alt: string;
  title: string;
  details: string[];
}

export const landingTitlesData = [
  {
    src: insightLogo,
    alt: "uptrending chart",
    title: "Management Consultant",
    details: [
      "Joined Accenture after getting my M.S. in Business Analytics",
      "5 years in the Consulting and Digital Strategy practices",
      "Focused on data strategy, master data management (MDM), data visualization, and robotic process automation (RPA)",
    ],
  },
  {
    src: mobileLogo,
    alt: "mobile development",
    title: "Full-Stack Engineer",
    details: [
      "Learned how to code through The Odin Project, an open-source full stack coding bootcamp",
      "Enjoys using React/React Native for the front-end and Node.js for the back-end",
      "Always learning and expanding my skillset",
    ],
  },
  {
    src: lightbulbLogo,
    alt: "lightbulb",
    title: "Entrepreneur",
    details: [
      "Currently building on a food-based social media app startup with a friend",
      "Leading the development of the app and the business strategy",
      "Launching in Southern California in late 2023",
    ],
  },
];

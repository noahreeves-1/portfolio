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
      "Focused on data visualization, data strategy & management, and robotic process automation (RPA)",
    ],
  },
  {
    src: mobileLogo,
    alt: "mobile development",
    title: "Full-Stack Engineer",
    details: [
      "Learned how to code full-stack through The Odin Project",
      "Enjoys using React or React Native for the front-end and Node.js (Express/NestJS) for the back-end",
      "Always learning and expanding my skillset",
    ],
  },
  {
    src: lightbulbLogo,
    alt: "lightbulb",
    title: "Entrepreneur",
    details: [
      "Currently working on a mobile app using React Native, NestJS, and GCP",
      "A social media-based food app to help people find better food faster",
      "Launching in Los Angeles in late 2023",
    ],
  },
];

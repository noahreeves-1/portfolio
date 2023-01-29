import html5Logo from "../../assets/images/html5logo.png";
import cssLogo from "../../assets/images/css3logo.png";
import javascriptLogo from "../../assets/images/javascriptlogo.png";
import typescriptLogo from "../../assets/images/typescript-logo.png";
import nodejsLogo from "../../assets/images/nodejslogo.webp";
import sqlLogo from "../../assets/images/sqlserverlogo.svg";

export interface LanguageLogo {
  name: string;
  src: string;
  alt: string;
  width?: number | string;
}

const languagesLogos: LanguageLogo[] = [
  {
    name: "HTML",
    src: html5Logo,
    alt: "html logo",
  },

  {
    name: "CSS",
    src: cssLogo,
    alt: "css logo",
  },

  {
    name: "JavaScript",
    src: javascriptLogo,
    alt: "javascript logo",
  },
  {
    name: "TypeScript",
    src: typescriptLogo,
    alt: "typescript logo",
  },
  {
    name: "Node.js",
    src: nodejsLogo,
    alt: "node js logo",
  },
  {
    name: "SQL",
    src: sqlLogo,
    alt: "sql logo",
  },
];

export default languagesLogos;
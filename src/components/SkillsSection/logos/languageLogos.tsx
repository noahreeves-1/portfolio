import html5Logo from "../../../assets/images/html-5-svgrepo-com.svg";
import cssLogo from "../../../assets/images/css-3-svgrepo-com.svg";
import javascriptLogo from "../../../assets/images/javascript-svgrepo-com.svg";
import typescriptLogo from "../../../assets/images/typescript-svgrepo-com.svg";
import nodejsLogo from "../../../assets/images/node-js-svgrepo-com.svg";
import sqlLogo from "../../../assets/images/sql-database-generic-svgrepo-com.svg";

export interface ILogo {
  name: string;
  src: string;
  alt: string;
  width?: number | string;
}

const languagesLogos: ILogo[] = [
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
    name: "SQL",
    src: sqlLogo,
    alt: "sql logo",
  },
  {
    name: "Node.js",
    src: nodejsLogo,
    alt: "node js logo",
  },
];

export default languagesLogos;

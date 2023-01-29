import tailwindLogo from "../../../assets/images/tailwind-svgrepo-com.svg";
import reactLogo from "../../../assets/images/react-javascript-js-framework-facebook-svgrepo-com.svg";
import reactNativeLogo from "../../../assets/images/react-javascript-js-framework-facebook-svgrepo-com.svg";
import expressJsLogo from "../../../assets/images/express-svgrepo-com.svg";
import nestJSLogo from "../../../assets/images/nestjs-svgrepo-com.svg";
import { ILogo } from "./languageLogos";

const skillsLogos: ILogo[] = [
  {
    name: "Tailwind CSS",
    src: tailwindLogo,
    alt: "tailwind logo",
  },

  {
    name: "React",
    src: reactLogo,
    alt: "react logo",
  },

  {
    name: "React Native",
    src: reactNativeLogo,
    alt: "react native logo",
  },
  {
    name: "Express",
    src: expressJsLogo,
    alt: "typescript logo",
  },
  {
    name: "NestJS",
    src: nestJSLogo,
    alt: "node js logo",
  },
];

export default skillsLogos;

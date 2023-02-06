import mongoDbLogo from "../../../assets/images/mongo-svgrepo-com.svg";
import sqlServerLogo from "../../../assets/images/sql-server.webp";
import mySqlLogo from "../../../assets/images/mysql-svgrepo-com.svg";
import herokuLogo from "../../../assets/images/heroku-icon-svgrepo-com.svg";
import railwayLogo from "../../../assets/images/railway-app.svg";
import githubLogo from "../../../assets/images/githublogo.svg";
import { ILogo } from "./languageLogos";

const databaseToolsLogos: ILogo[] = [
  {
    name: "MongoDB",
    src: mongoDbLogo,
    alt: "mongodb logo",
  },
  {
    name: "SQL Server",
    src: sqlServerLogo,
    alt: "sql server logo",
  },
  {
    name: "MySQL",
    src: mySqlLogo,
    alt: "mysql logo",
  },
  {
    name: "Heroku",
    src: herokuLogo,
    alt: "heroku logo",
  },
  {
    name: "Railway",
    src: railwayLogo,
    alt: "railway logo",
  },
  {
    name: "GitHub",
    src: githubLogo,
    alt: "github logo",
  },
];

export default databaseToolsLogos;

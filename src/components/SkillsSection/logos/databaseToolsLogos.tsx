import mongoDbLogo from "../../../assets/images/mongo-svgrepo-com.svg";
import sqlServerLogo from "../../../assets/images/sql-server.webp";
import mySqlLogo from "../../../assets/images/mysql-svgrepo-com.svg";
// import herokuLogo from "../../../assets/images/heroku-icon-svgrepo-com.svg";
// import railwayLogo from "../../../assets/images/railway-app.svg";
// import githubLogo from "../../../assets/images/githublogo.svg";
import postgresqlLogo from "../../../assets/images/postgresql-svgrepo-com.svg";
import dockerLogo from "../../../assets/images/docker-svgrepo-com.svg";
import redisLogo from "../../../assets/images/redis-svgrepo-com.svg";
import turboRepoLogo from "../../../assets/images/turborepo.dark.svg";
import { ILogo } from "./languageLogos";

const databaseToolsLogos: ILogo[] = [
  {
    name: "Postgre SQL",
    src: postgresqlLogo,
    alt: "postgre sql logo",
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
    name: "MongoDB",
    src: mongoDbLogo,
    alt: "mongodb logo",
  },
  {
    name: "Docker",
    src: dockerLogo,
    alt: "docker logo",
  },
  {
    name: "Redis",
    src: redisLogo,
    alt: "redis logo",
  },
  {
    name: "Turbo",
    src: turboRepoLogo,
    alt: "turbo logo",
  },
];

export default databaseToolsLogos;

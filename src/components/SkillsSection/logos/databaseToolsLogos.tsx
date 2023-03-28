import mongoDbLogo from "../../../assets/images/mongo-svgrepo-com.svg";
import sqlServerLogo from "../../../assets/images/sql-server.webp";
import mySqlLogo from "../../../assets/images/mysql-svgrepo-com.svg";
import postgresqlLogo from "../../../assets/images/postgresql-svgrepo-com.svg";
import dockerLogo from "../../../assets/images/docker-svgrepo-com.svg";
import redisLogo from "../../../assets/images/redis-svgrepo-com.svg";
import turboRepoLogo from "../../../assets/images/turborepo.dark.svg";
import nxLogo from "../../../assets/images/nx-logo.svg";
import { ILogo } from "./languageLogos";

const databaseToolsLogos: ILogo[] = [
  {
    name: "PostgreSQL",
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
  {
    name: "Nx",
    src: nxLogo,
    alt: "Nx logo",
  },
];

export default databaseToolsLogos;

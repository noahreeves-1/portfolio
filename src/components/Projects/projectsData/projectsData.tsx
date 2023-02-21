import blog1 from "../../../assets/images/blog 1.png";
import blog2 from "../../../assets/images/blog 2.png";
import blog3 from "../../../assets/images/blog 3.png";
import membersOnly1 from "../../../assets/images/members only 1.png";
import membersOnly2 from "../../../assets/images/members only 2.png";
import membersOnly3 from "../../../assets/images/members only 3.png";
import supplement1 from "../../../assets/images/supplement store 1.png";
import supplement2 from "../../../assets/images/supplement store 2.png";
import supplement3 from "../../../assets/images/supplement store 3.png";

export interface IProject {
  name: string;
  src: string;
  techStack: string;
  description: string;
  warning: string;
  picSources: string[];
}

export const projectsData: IProject[] = [
  {
    name: "Blog",
    src: "https://github.com/noahreeves-1/my-blog-site",
    techStack: "React | Tailwind | TypeScript | Node.js | Express | MongoDB",
    description:
      "A full-stack web app where I can write and publish blog posts. Posts are saved to and retrieved from a database. The app is protected with password hashing, user authentication, and JWT Tokens.",
    warning:
      "Site unavailable - MongoDB pauses free clusters with prolonged inactivity.",
    picSources: [blog1, blog2, blog3],
  },
  {
    name: "Member's Only",
    src: "https://github.com/noahreeves-1/express-members-only",
    techStack: "Pug | Tailwind | JavaScript | Node.js | Express | MongoDB",
    description:
      "A full-stack web app that allows only users to post like a forum. However, only members who know the secret code are allowed to see who the author of each post is. Posts are saved to and retrieved from a database.",
    warning:
      "Site unavailable - MongoDB pauses free clusters with prolonged inactivity.",
    picSources: [membersOnly1, membersOnly2, membersOnly3],
  },
  {
    name: "Supplement Store",
    src: "https://github.com/noahreeves-1/express-workout-inventory",
    techStack: "Pug | CSS | JavaScript | Node.js | Express | MongoDB",
    description:
      "A full-stack shop-like web app with items and a shopping cart allowing users to add and remove items from their cart. Item details are saved to and retrieved from a database. Payments not enabled because it is not a real shop.",
    warning:
      "Site unavailable - MongoDB pauses free clusters with prolonged inactivity.",
    picSources: [supplement1, supplement2, supplement3],
  },
  {
    name: "Weather App",
    src: "https://noahreeves-1.github.io/odin-weather-app/",
    techStack: "HTML | CSS | JavaScript",
    description:
      "A front-end only web app that shows weather information and a GIF of the weather based on the input location. One of the first projects I created.",
    warning: "",
    picSources: [],
  },
  {
    name: "Calculator",
    src: "https://noahreeves-1.github.io/odin-project-calculator/",
    techStack: "HTML | CSS | JavaScript",
    description:
      "A front-end only web app of a working calculator. One of the first projects I created.",
    warning: "",
    picSources: [],
  },
  {
    name: "Etch-A-Sketch",
    src: "https://noahreeves-1.github.io/odin-project-etch-a-sketch/",
    techStack: "HTML | CSS | JavaScript",
    description:
      "A front-end only web app game where you can hover over squares to draw anything you want. One of the first projects I created.",
    warning: "",
    picSources: [],
  },
];

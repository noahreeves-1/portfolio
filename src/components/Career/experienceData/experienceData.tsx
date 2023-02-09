import tennisImg from "../../../assets/images/tennis.jpg";
import telemarketingImg from "../../../assets/images/telemarketing.jpg";
import koreaImg from "../../../assets/images/korea.jpg";
import managerImg from "../../../assets/images/manager.jpg";
import searchImg from "../../../assets/images/search.jpg";
import awardImg from "../../../assets/images/award.jpg";
import consulting from "../../../assets/images/consulting.jpg";
import coding from "../../../assets/images/coding.jpg";

export interface Iexperience {
  quote: string;
  image: string;
  imageAlt: string;
  description: string;
}

export const experienceData: Iexperience[] = [
  {
    quote: `"You're doing great sweetie!"`,
    description:
      "I was 16 years old when I got my first ever job. I was a Tennis Coach at a local summer camp. I was also an English and Math Tutor during my senior year of high school.",
    image: tennisImg,
    imageAlt: "tennis",
  },
  {
    quote: `"I'm calling on behalf of Southern Methodist University."`,
    description:
      "During my freshman and sophomore year of college, I worked 20 hrs/week and raised over $40,000 in donations.",
    image: telemarketingImg,
    imageAlt: "telemarketing",
  },
  {
    quote: `"Annyeonghaseyo."`,
    description:
      "The summer after my freshman year of college, I worked as full-time Commerce Intern in Seoul, South Korea.",
    image: koreaImg,
    imageAlt: "korea",
  },
  {
    quote: `"Can I share something with you?"`,
    description:
      "The summer after my sophomore year, I worked two unpaid internships. Seeing that we lacked direction at one of them, I presented a marketing plan to the CEO. The next time I came in, he promoted me to Marketing Manager.",
    image: managerImg,
    imageAlt: "manager",
  },
  {
    quote: `"Found another one."`,
    description:
      "The summer after my junior year, I got a full-time internship at a recruiting firm scouring the web for potential candidates for senior executive roles.",
    image: searchImg,
    imageAlt: "search",
  },
  {
    quote: `"We did it!"`,
    description:
      "During my senior year and my Master's program, I led the marketing strategy and implementation for a local glass repair and installation franchise. We never hit $500,000/month before I started, but after I left, we were clearing that every single month. We won the 2015 Franchise of the Year award.",
    image: awardImg,
    imageAlt: "award",
  },
  {
    quote: `"Pls fix. Thanks."`,
    description:
      "After my Master's program, I got a job at Accenture working as a Consulting Analyst then as a Digital Strategy Consultant. I stayed for nearly 5 years and worked on 10 projects at 7 different clients. My focus was on robotic process automation (RPA), data visualization, and data management.",
    image: consulting,
    imageAlt: "consulting",
  },
  {
    quote: `"It's working!"`,
    description:
      "It was a struggle at first, but now I enjoy building applications and look forward to expanding my skillset to become the bestprogrammer I can be.",
    image: coding,
    imageAlt: "coding",
  },
];

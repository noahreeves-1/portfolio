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
      "In 2010, I got my first ever job. I was a Tennis Coach at a local summer camp. I was also an english and algebra tutor during my senior year of high school.",
    image: tennisImg,
    imageAlt: "tennis",
  },
  {
    quote: `"I'm calling on behalf of Southern Methodist University."`,
    description:
      "During my freshman and sophomore years of college, I worked 20 hours a week as a student fundraiser and raised over $40,000 in donations for my alma mater.",
    image: telemarketingImg,
    imageAlt: "telemarketing",
  },
  {
    quote: `"Annyeonghaseyo."`,
    description:
      "The summer after my freshman year of college, I worked as a full-time Commerce Intern in Seoul, South Korea.",
    image: koreaImg,
    imageAlt: "korea",
  },
  {
    quote: `"Great job everyone."`,
    description:
      "The summer after my sophomore year, I had two unpaid internships. After presenting a marketing plan to the CEO at one of them, he promoted me to Marketing Manager, and I managed 12 interns throughout the summer.",
    image: managerImg,
    imageAlt: "manager",
  },
  {
    quote: `"Found another one."`,
    description:
      "The summer after my junior year, I got a full-time internship at a recruiting firm scouring the web for potential candidates for senior executive roles. I learned how to get really good at using Google Search.",
    image: searchImg,
    imageAlt: "search",
  },
  {
    quote: `"We did it!"`,
    description:
      "During my senior year and my Master's program, I led the marketing strategy and implementation for a local glass repair and installation franchise. We never hit $500,000/month before I started, but after I left, we were clearing that every single month. We ended up winning the 2015 Franchise of the Year award that year.",
    image: awardImg,
    imageAlt: "award",
  },
  {
    quote: `"Pls fix. Thanks."`,
    description:
      "After my Master's program, I started at Accenture as a Consulting Analyst then as a Digital Strategy Consultant. I stayed for nearly 5 years and worked on 10 projects at 7 different clients. I often flew weekly to various cities around the U.S. focusing on projects related to data visualization, data strategy, data management, and robotic process automation.",
    image: consulting,
    imageAlt: "consulting",
  },
  {
    quote: `"It's working!"`,
    description:
      "It was a struggle at first, but I love it now. I feel more free than I have ever felt before. I can't wait to become the best programmer I can be.",
    image: coding,
    imageAlt: "coding",
  },
];

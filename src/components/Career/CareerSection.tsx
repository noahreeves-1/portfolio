import tennisImg from "../../assets/images/tennis.jpg";
import telemarketingImg from "../../assets/images/telemarketing.jpg";
import koreaImg from "../../assets/images/korea.jpg";
import managerImg from "../../assets/images/manager.jpg";
import searchImg from "../../assets/images/search.jpg";
import awardImg from "../../assets/images/award.jpg";
import consulting from "../../assets/images/consulting.jpg";
import coding from "../../assets/images/coding.jpg";

export function CareerSection() {
  return (
    <section
      id="career"
      className="py-10 sm:py-20 flex justify-center bg-slate-50"
    >
      <div className="px-4 max-w-5xl w-full">
        <h3 className="text-center text-xl font-bold sm:text-3xl">
          My Career Journey
        </h3>
        {/* Tennis & Tutor */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">"You're doing great sweetie!"</p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              I was 16 years old when I got my first ever job. I was a Tennis
              Coach at a local summer camp.
            </p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              I was also an English and Math Tutor during my senior year of high
              school.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={tennisImg}
              alt="tennis"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
        {/* RuffaloCODY */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2 flex items-center">
            <img
              src={telemarketingImg}
              alt="telemarketing"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">
              "I'm calling on behalf of Southern Methodist University."
            </p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              During my freshman and sophomore year of college, I worked 20
              hrs/week and raised over $40,000 in donations.
            </p>
          </div>
        </div>
        {/* AT Solution */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">"Annyeonghaseyo."</p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              The summer after my freshman year of college, I worked as
              full-time Commerce Intern in Seoul, South Korea.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={koreaImg}
              alt="korea"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
        {/* Unpaid internships BEC & LocallyRank */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2">
            <img
              src={managerImg}
              alt="worlds best boss coffee mug"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">"Here's the plan guys."</p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              The summer after my sophomore year, I worked two unpaid
              internships. Seeing that we lacked direction at one of them, I
              presented a marketing plan to the CEO. The next time I came in, he
              promoted me to Marketing Manager.
            </p>
          </div>
        </div>
        {/* Futurestep */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">"Found another one."</p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              The summer after my junior year, I got a full-time internship at a
              recruiting firm scouring the web for potential candidates for
              senior executive roles.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={searchImg}
              alt="search"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
        {/* Glass Doctor */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2">
            <img
              src={awardImg}
              alt="award"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">"We did it!"</p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              During my senior year and my Master's program, I led the marketing
              strategy and implementation for a local glass repair and
              installation franchise. We never hit $500,000/month before I
              started, but after I left, we were clearing that every single
              month. We won the 2015 Franchise of the Year award.
            </p>
          </div>
        </div>
        {/* Accenture */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">"Pls fix. Thanks."</p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              After my Master's program, I got a job at Accenture working as a
              Consulting Analyst then as a Digital Strategy Consultant. I stayed
              for nearly 5 years and worked on 10 projects at 7 different
              clients.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={consulting}
              alt="consulting"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
        {/* Software Engineering */}
        <div className="flex gap-4 py-8 sm:gap-8 sm:py-16">
          <div className="w-1/2">
            <img
              src={coding}
              alt="consulting"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <p className="sm:text-3xl">"It's working!"</p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              After quitting my job in 2021, I learned how to code full stack
              through{" "}
              <span>
                <a
                  href="https://www.theodinproject.com/"
                  className="pt-2 text-xs text-cloud-blue-500 sm:pt-4 sm:text-lg"
                >
                  The Odin Project
                </a>
              </span>
              .
            </p>
            <p className="text-xs pt-2 sm:pt-4 sm:text-lg">
              It was a struggle at first, but now I enjoy building applications
              and look forward to expanding my skillset to become the best
              programmer I can be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

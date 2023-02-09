import linkedInLogo from "../../assets/images/linkedin-rounded-svgrepo-com.svg";
import gitHubLogo from "../../assets/images/githublogo.svg";
import { ContactSection } from "../../components/Contact/ContactSection";

export const Footer = () => {
  return (
    <section className="p-4 sm:pt-20  bg-cloud-blue-500 text-white flex justify-center">
      <div className="max-w-5xl w-full sm:flex sm:justify-between">
        <div className="py-4">
          <h3 className="pb-4 text-xl text-center sm:text-3xl">
            Additional Info
          </h3>
          <div className="flex gap-4 sm:flex-col">
            <div>
              <a
                href="https://www.linkedin.com/in/noahh-kim/"
                className="flex gap-1 items-center sm:gap-2"
              >
                <img
                  src={linkedInLogo}
                  alt="linkedin logo"
                  className="w-4 sm:w-6"
                />
                <p className="sm:text-lg">LinkedIn</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/noahreeves-1"
                className="flex gap-1 items-center sm:gap-2"
              >
                <img
                  src={gitHubLogo}
                  alt="github logo"
                  className="w-4 sm:w-6"
                />
                <p className="sm:text-lg">GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </section>
  );
};

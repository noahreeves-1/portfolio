import { useState } from "react";
import { NavBarData } from "./NavbarData";
import { WebMenu } from "./WebMenu/WebMenu";
import menuIcon from "../../assets/images/menu_FILL0_wght400_GRAD0_opsz48.svg";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center bg-cloud-blue-500">
      <nav
        className="flex justify-between w-full max-w-5xl text-white"
        id="navbar"
      >
        <a href="/" className="flex items-center ml-4 my-4">
          <div id="logo-container" className=" flex gap-1 items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/90/FFFFFF/owl.png"
              alt="owl logo"
              className="h-6 sm:h-10"
            />
            {/* //* below <a> tag required by icons8 for free usage */}
            <div id="initials-container">
              <p className="font-bold text-white sm:text-lg">NHK</p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://icons8.com/icon/97092/owl"
          className="hidden"
        >
          Owl icon by Icons8
        </a>

        {/* // * Web Menu */}
        <div className="flex items-center">
          <WebMenu links={NavBarData} />
        </div>
        <div className="flex items-center mr-4">
          <a href="#contact">
            <p className="py-1 px-4 rounded-full bg-cloud-blue-400 hidden sm:block sm:text-lg">
              Contact
            </p>
          </a>
        </div>
        <div className="flex justify-end w-full items-center sm:hidden">
          <button className="px-5 py-2" onClick={() => setOpen(true)}>
            <img src={menuIcon} alt="menu icon" className="h-5 invert" />
          </button>
        </div>

        {/* // * Mobile Menu */}
        {open ? (
          <MobileMenu links={NavBarData} close={() => setOpen(false)} />
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}

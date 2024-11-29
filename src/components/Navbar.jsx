import { useState } from "react";
import { navLinks } from "../constants";
import Button from "./shared/Button";
import { MenuIcon, RightArrowIcon } from "../assets/icons";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="container fixed inset-x-0 z-20 mt-9">
      <nav
        aria-label="main navigation"
        className="flex justify-between border border-[#0000000D] h-[5rem] md:h-[5.8rem] py-3.5 px-5 items-center bg-white/90 backdrop-blur-md rounded-full font-medium text-slate-700"
        role="navigation"
      >
        {/*  <!-- Brand logo --> */}
        <a
          id="Fixefly"
          aria-label="Fixefly logo"
          aria-current="page"
          className="hidden md:flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
        >
          <img src="/src/assets/images/logo.svg" alt="Fixefly logo" />
        </a>
        {/*  <!-- Logo mobile --> */}
        <a
          id="Fixefly"
          aria-label="Fixefly logo"
          aria-current="page"
          className="md:hidden py-3 pl-3"
          href="javascript:void(0)"
        >
          <img
            src="/src/assets/images/logo-sm.svg"
            alt="Fixefly logo"
            width={31}
            height={33}
          />
        </a>
        {/* <!-- Mobile trigger --> */}
        <button
          className={`relative flex items-center gap-2 rounded-full p-4 bg-primary text-white order-10  h-10  self-center lg:hidden`}
          onClick={() => setIsToggleOpen(!isToggleOpen)}
          aria-expanded={isToggleOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <MenuIcon className="w-5" />
          <span className="text-lg font-semibold">Menu</span>
        </button>
        {/* <!-- Navigation links --> */}
        <ul
          role="menubar"
          aria-label="Select page"
          className={`hidden h-full pr-10 lg:flex gap-4 justify-center font-medium`}
        >
          {navLinks.map(({ label, address, icon: Icon }) => (
            <li key={label} role="none" className="flex items-stretch">
              <a
                role="menuitem"
                aria-haspopup="false"
                className="group flex items-center group text-lg gap-2 py-3.5 px-5 rounded-full hover:bg-accent transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none"
                href={address}
              >
                {/* <img src={icon} alt={label} className="" /> */}
                <Icon className="size-6 fill-[#3C3C3C] group-hover:fill-primary" />

                <span className="hidden group-hover:block">{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex ml-auto h-full items-center px-6 lg:ml-0 lg:p-0">
          <Button hoverTxt={"Let's talk 💬"} icon={RightArrowIcon}>
            Work with us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

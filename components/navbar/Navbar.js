import React from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import LogoPill from "../logo/LogoPill";
import classNames from "classnames";
import Link from "next/link";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const scrolled = scrollPosition >= 300;
  return (
    <nav
      className={classNames(
        "flex flex-row flex-nowrap justify-start sticky py-3 px-4 items-center top-0 left-0 right-0 z-50 transition-all duration-300 delay-100",
        {
          "bg-white shadow-sm dark:shadow-none dark:bg-dark-800": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <div className="container w-[1110px] mx-auto p-0 flex flex-nowrap">
        <LogoPill />
        {/* <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="menu-button"
        >
          <span className="oi oi-menu"></span>
        </button> */}

        <div
          className={classNames(
            "flex flex-wrap basis-auto flex-grow-1 items-center ml-auto font-poppins transition-all duration-200",
            {
              "dark:text-white text-black": scrolled,
              "text-white": !scrolled,
            }
          )}
        >
          <ul className="flex-row flex pl-0 mb-0 list-none">
            <NavbarItem href="/" text="Home" />
            <NavbarItem href="/" text="About" />
            <NavbarItem href="/" text="Education" />
            <NavbarItem href="/" text="Experience" />
            <NavbarItem href="/" text="Projects" />
            <NavbarItem href="/" text="Awards" />
            <NavbarItem href="/" text="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavbarItem({ href, text }) {
  const scrollPosition = useScrollPosition();
  const scrolled = scrollPosition >= 300;
  return (
    <li className="list-item">
      <Link href={href}>
        <a
          className={classNames(
            "text-base py-3 px-5 font-medium hover:border-2 dark:border-b-white border-b-black border-t-transparent border-x-transparent transition-all",
            {
              // "dark:border-white border-black": scrolled,
              // "border-white": !scrolled,
            }
          )}
        >
          <span
            id="nav-bar-item"
            className={classNames(
              "transition-all duration-100 dark:text-white text-black"
            )}
          >
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
}

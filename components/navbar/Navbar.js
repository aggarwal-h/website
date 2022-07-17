import React from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import LogoPill from "../logo/LogoPill";
import classNames from "classnames";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  return (
    <nav
      className={classNames(
        "flex flex-row flex-nowrap justify-start sticky py-3 px-4 items-center top-0 left-0 right-0 z-10 transition-all duration-300 delay-100",
        {
          "bg-white dark:bg-dark-800": scrollPosition >= 300,
          "bg-transparent": scrollPosition < 300,
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

        <div className="flex flex-wrap basis-auto flex-grow-1 items-center ml-auto text-white font-poppins">
          <ul className="flex-row flex pl-0 mb-0 list-none">
            <li className="list-item">
              <a href="index" className="text-base py-3 px-5 font-normal">
                <span>Home</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="index#about-section"
                className="text-base py-3 px-5 font-normal"
              >
                <span>About</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="index#education-section"
                className="text-base py-3 px-5 font-normal"
              >
                <span>Education</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="index#experience-section"
                className="text-base py-3 px-5 font-normal"
              >
                <span>Experience</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="index#projects-section"
                className="text-base py-3 px-5 font-normal"
              >
                <span>Projects</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="index#awards-section"
                className="text-base py-3 px-5 font-normal"
              >
                <span>Awards</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="index#contact-section"
                className="text-base py-3 px-5 font-normal"
              >
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

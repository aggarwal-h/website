import React, { useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import LogoPill from "../logo/LogoPill";
import classNames from "classnames";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const scrolled = scrollPosition >= 300;
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={classNames(
        "sticky top-0 left-0 right-0 transition-all duration-300 delay-100 z-50"
      )}
    >
      <div
        className={classNames(
          "flex flex-row flex-nowrap justify-start py-3 px-4 items-center",
          {
            "bg-white shadow-sm dark:shadow-none dark:bg-dark-800": scrolled,
            "bg-transparent": !scrolled,
          }
        )}
      >
        <div className="container  mx-auto p-0 flex flex-nowrap">
          <LogoPill />
          <button
            className="ml-auto text-white lg:hidden"
            onClick={() => setOpen(!open)}
            key={"button_" + open}
          >
            {open ? <ImCross size="20" /> : <HiOutlineMenu size="24" />}
          </button>

          <div
            className={classNames(
              "hidden lg:flex flex-wrap basis-auto flex-grow-1 items-center ml-auto font-poppins transition-all duration-200",
              {
                "dark:text-white text-black": scrolled,
                "text-white": !scrolled,
              }
            )}
          >
            <ul className="flex-row flex pl-0 mb-0 list-none">
              <NavbarItem href="/" text="Home" />
              <NavbarItem href="/#about" text="About" />
              <NavbarItem href="/#education" text="Education" />
              <NavbarItem href="/eexperiencd" text="Experience" />
              <NavbarItem href="/#projects" text="Projects" />
              <NavbarItem href="/#awards" text="Awards" />
              <NavbarItem href="/#contact" text="Contact" />
            </ul>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "w-full lg:hidden absolute px-10 pt-2 pb-6 rounded-b-3xl",
          {
            "hidden rounded-2xl": !open,
            "block shadow-xl": open,
          },
          {
            "bg-gray-50 dark:bg-dark-700": scrolled,
            "bg-transparent": !scrolled,
          }
        )}
      >
        <ul className="flex flex-col">
          <NavbarListItem href="/" title="Home" />
          <NavbarListItem href="/about" title="About" />
          <NavbarListItem href="/education" title="Education" />
        </ul>
      </div>
    </nav>
  );
}

function NavbarItem({ href, text }) {
  return (
    <li className="list-item">
      <Link href={href}>
        <a
          className={classNames(
            "text-base py-3 px-5 font-medium hover:border-2 dark:border-b-white border-b-black border-t-transparent border-x-transparent transition-all"
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

function NavbarListItem({ href, title }) {
  const router = useRouter();
  return (
    <li>
      <Link href={href}>
        <a
          className={classNames("block rounded-xl p-3 mt-2", {
            "bg-blue-600 text-white": router.pathname === href,
            "bg-gray-100 dark:bg-dark-900 dark:text-white":
              router.pathname !== href,
          })}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

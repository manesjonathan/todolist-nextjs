import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 z-20 w-full justify-between px-2 py-2 bg-indigo-900 text-gray-50">
        <div className="container  mx-auto flex flex-wrap  justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className={"flex items-center"}>
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:text-orange-500"
                href="/">Todo Web App
              </Link>
            </div>
            <button
              className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:text-orange-500"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {navbarOpen ? (
                <GiCrossedBones />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar">
            <ul
              className={"flex flex-col lg:flex-row list-none lg:ml-auto justify-center" + (navbarOpen ? " w-full" : "")}>
              <li>
                <Link
                  className={"px-3 py-2 flex text-xs uppercase font-bold leading-snug hover:text-orange-500 cursor-pointer w-full"}
                  href={"/"}>Tâches
                </Link>
              </li>
              <li>
                <Link
                  className={"px-3 py-2 flex text-xs uppercase font-bold leading-snug hover:text-orange-500 cursor-pointer w-full"}
                  href={"/test"}>Calendrier
                </Link>
              </li>
              <li>
                <Link
                  className={"px-3 py-2 flex text-xs uppercase font-bold leading-snug hover:text-orange-500 cursor-pointer w-full"}
                  href={"/courses"}>Courses
                </Link>
              </li>
              <li>
                <Link
                  className={"px-3 py-2 flex text-xs uppercase font-bold leading-snug hover:text-orange-500 cursor-pointer w-full"}
                  href={"/logout"}>Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [floating, setFloating] = useState(false);

  const scrollListener = () => {
    if (window.scrollY > 500) {
      setFloating(true);
    } else {
      setFloating(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <>
      <nav
        className={`${
          floating ? "sticky top-0 drop-shadow-md w-full" : "top-[-100px]"
        } bg-white z-[998] transition-all`}
      >
        <div className="flex items-center justify-between p-5 lg:px-8 max-w-7xl mx-auto">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="inter font-bold text-[1.25rem] uppercase"
          >
            DINFLUENCE
          </button>
          <div className="hidden lg:flex items-center space-x-8">
            {menu.map((x) => {
              return (
                <a
                  className="hover:text-primary transition-all"
                  key={x}
                  href={`#${x}`}
                >
                  {x}
                </a>
              );
            })}
          </div>
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-3 border p-2 px-4 rounded-lg">
              <FaSearch className="text-gray-300" />
              <input
                className="outline-none max-w-[150px]"
                placeholder="Search"
              />
            </div>
            <button className="hover:text-primary transition-all">Login</button>
            <button className="bg-primary text-white rounded-xl p-3 px-6 hover:scale-[0.95] hover:brightness-[0.95] transition-all">
              Sign Up
            </button>
          </div>
          <AiOutlineMenu
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden text-[1.5rem]"
          />
        </div>
      </nav>

      {/* Mobile Nav  */}
      <div
        className={`${
          showMenu ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all fixed left-0 top-0 bottom-0 bg-white p-5 drop-shadow-lg flex flex-col space-y-5 z-[999]`}
      >
        <div className="flex items-center space-x-5 justify-between">
          <div className="inter font-bold text-[1.25rem] uppercase">
            DINFLUENCE
          </div>
          <AiOutlineClose
            className="text-[1.5rem]"
            onClick={() => setShowMenu(false)}
          />
        </div>
        {menu.map((x) => {
          return (
            <a
              key={x + "mobile"}
              onClick={() => setShowMenu(false)}
              href={`#${x}`}
            >
              {x}
            </a>
          );
        })}
        <div className="flex items-center space-x-3 border p-2 px-5 rounded-lg">
          <FaSearch className="text-gray-300" />
          <input className="outline-none max-w-[150px]" placeholder="Search" />
        </div>
        <button className="border border-primary p-2 rounded-md">Login</button>
        <button className="bg-primary text-white p-2 hover:scale-[0.95] transition-all rounded-md">
          Sign Up
        </button>
      </div>
    </>
  );
}

const menu = ["Categories", "Experiences", "Creators", "Reviews"];

export default Navigation;

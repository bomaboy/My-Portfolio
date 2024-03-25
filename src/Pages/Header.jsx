import "../styles/Header.css";
import { NavLink, Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";

function Header() {
  const [stickyHeader, setTickyHeader] = useState("");
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", HeaderScroll);
    return () => {
      window.removeEventListener("scroll", HeaderScroll);
    };
  }, []);

  const Display = () => {
    setShowNav(!showNav);
  };
  const HeaderScroll = () => {
    let winscroll = window.scrollY;
    let scroll =
      winscroll >= 10
        ? "fixed bg-black shadow-2xl  w-[100vw] text-white  "
        : "";
    setTickyHeader(scroll);
  };

  return (
    <>
      <header
        className={`${stickyHeader} navbar bg-[transparent] text-[white] h-[10vh]  w-screen fixed flex items-center justify-center z-30  shadow-lg font-serif`}
      >
        <div className="w-[95vw] h-[10vh] flex items-center md:justify-between sm:justify-around justify-between">
          <Link
            to="/"
            className="font-bold hover:text-[blue] duration-500 text-xl w-[15vw]"
          >
            BomaTech
          </Link>
          <div className=" hidden sm:flex w-[55vw] ">
            <ul className=" duration-500 text-[15px] font-bold  h-[10vh] w-[505px] md:w-[70vw] flex items-center justify-end ">
              <li className="w-[10vw]  ">
                <NavLink to="/" className="hover:text-[blue] ">
                  Home
                </NavLink>
              </li>
              <li className="w-[10vw]">
                <NavLink to="/About" className="hover:text-[blue]">
                  About
                </NavLink>
              </li>
              <li className="w-[10vw]">
                <NavLink to="/Contact" className="hover:text-[blue]">
                  Contact
                </NavLink>
              </li>
              <li className="w-[10vw]">
                <NavLink to="/Services" className="hover:text-[blue]">
                  Services
                </NavLink>
              </li>
              <li className="w-[10vw]">
                <NavLink to="/Projects" className="hover:text-[blue]">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[10vw] h-[10vh] flex items-center justify-center">
            <IoMenuSharp
              className="text-white sm:hidden flex"
              onClick={Display}
            />
            <Link to="http://wa.me/2347041131882" className="">
              <button className="sm:flex w-[120px] h-[8vh] items-center justify-center hidden  text-[15px] border-white border-[1px] rounded-[5px] duration-500 hover:text-[blue] ">
                Connect with me
              </button>
            </Link>
          </div>
        </div>
      </header>
      <nav
        className={
          showNav === false
            ? `sm:hidden w-[100vw] h-[70vh] bg-[blue] flex  items-start justify-center flex-col duration-1000 overflow-hidden `
            : `w-[100vw] h-[0vh] overflow-hidden text-white bg-[blue] sm:hidden flex duration-2000 absolute`
        }
      >
        <div className="flex items-start justify-around flex-col w-[50vw] h-[50vh] mt-5 pl-5">
          {/* <li className="w-[10vw]  "> */}
          <a href="/" className="text-[white] font-bold ">
            Home
          </a>
          {/* </li> */}
          {/* <li className="w-[10vw]"> */}
          <a href="/About" className="text-[white] font-bold">
            About
          </a>
          {/* </li> */}
          {/* <li className="w-[10vw]"> */}
          <a href="/Contact" className="text-[white] font-bold">
            Contact
          </a>
          {/* </li> */}
          {/* <li className="w-[10vw]"> */}
          <a href="/Services" className="text-[white] font-bold">
            Services
          </a>
          {/* </li> */}
          {/* <li className="w-[10vw]"> */}
          <a href="/Projects" className="text-[white] font-bold">
            Projects
          </a>
          {/* </li> */}
        </div>
      </nav>
    </>
  );
}

export default Header;

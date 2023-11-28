"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import LogoWhite from "../public/images/logo-white.png";

interface RoutesType {
  name: string;
  path: string;
}

const Routes: RoutesType[] = [
  { name: "Home", path: "#home" },
  { name: "Work", path: "#work" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [hambergerVisible, setHambergerVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMenuChange = () => {
    setHambergerVisible(!hambergerVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      localStorage.setItem("colorMode", "light");
    } else if (!isDarkMode) {
      localStorage.setItem("colorMode", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("colorMode") === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    const changeColorModes = () => {
      if (isDarkMode) {
        (document.getElementById("body")!.classList as any) = "dark";
      } else if (!isDarkMode) {
        (document.getElementById("body")!.classList as any) = "light";
      }
    };

    changeColorModes();
  }, [isDarkMode]);

  return (
    <nav className="flex justify-between items-center h-16">
      <div className="z-20 cursor-pointer">
        <Link href="/">
          {isDarkMode ? (
            <Image src={LogoWhite} alt="Logo" width={80} />
          ) : (
            <Image src={Logo} alt="Logo" width={80} />
          )}
        </Link>
      </div>
        
      {/* Desktop */}
      <ul className="hidden md:flex gap-8 items-center">
        <span className="uppercase text-neutral-500">Navigate</span>
        {Routes.map((route) => (
          <a key={route.path} href={route.path}>
            <li>{route.name}</li>
          </a>
        ))}
        <div
          onClick={toggleDarkMode}
          className="
            flex
            items-center
            border
            border-[var(--complimentary-color)]
            py-2
            px-4
            rounded-lg
            cursor-pointer
          "
        >
          {isDarkMode ? <FiSun /> : <BsMoonStars />}
        </div>
      </ul>

      {/* Mobile view */}
      <div className="md:hidden flex items-center gap-6 z-20">
        {!hambergerVisible ? (
          <RxHamburgerMenu
            size={25}
            className="cursor-pointer"
            onClick={handleMenuChange}
          />
        ) : (
          <AiOutlineClose
            size={25}
            className="cursor-pointer"
            onClick={handleMenuChange}
          />
        )}
        <div
          onClick={toggleDarkMode}
          className="
            flex
            items-center
            border
            border-[var(--complimentary-color)]
            py-2
            px-4
            rounded-lg
            cursor-pointer
          "
        >
          {isDarkMode ? <FiSun /> : <BsMoonStars />}
        </div>
      </div>

      {hambergerVisible && (
        <ul
          className="
            flex
            flex-col 
            justify-center 
            items-center 
            text-2xl 
            font-semibold 
            gap-10 
            fixed 
            top-0 
            left-0 
            w-full 
            h-screen 
            bg-[var(--bg-color)]
            z-10
          "
        >
          <span className="uppercase text-neutral-400">Navigate</span>
          {Routes.map((route) => (
            <a key={route.path} href={route.path}>
              <li onClick={handleMenuChange}>{route.name}</li>
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

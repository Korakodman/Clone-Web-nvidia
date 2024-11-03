"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount, VscSearch } from "react-icons/vsc";

export default function Nav_navigator() {
  const [isShow, SetisShow] = useState(false);
  const toggleShow = () => {
    SetisShow(!isShow);
  };
  return (
    <div>
      <ul className=" flex text-center ">
        <li>
          <a href="#home" className="block py-0.5 px-2 md:hidden lg:block">
            Products
          </a>
        </li>
        <li>
          <a href="#about" className=" block py-0.5 px-2 md:hidden lg:block">
            Solutions
          </a>
        </li>
        <li>
          <a href="#services" className="block py-0.5 px-2 md:hidden lg:block ">
            Industries
          </a>
        </li>
        <li>
          <a href="#contact" className="block py-0.5 px-2 md:hidden lg:block">
            For You
          </a>
        </li>
      </ul>
      <nav
        className={`fixed top-0 left-0 h-full w-full bg-white text-black transform ${
          isShow ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:hidden z-40`}
      >
        <ul className="mt-16 space-y-4 px-4">
          <li>
            <a href="#home" className="block py-2 px-4 rounded ">
              Products
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-4 rounded ">
              Solutions
            </a>
          </li>
          <li>
            <a href="#services" className="block py-2 px-4 rounded ">
              Industries
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 rounded ">
              For You
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 rounded ">
              Shop
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 rounded ">
              Drivers
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 rounded ">
              Support
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="text-2xl p-1 fixed top-0 left-4 z-50 lg:hidden"
        onClick={toggleShow}
      >
        ☰
      </button>
      <VscSearch className="text-xl md:block lg:hidden left-20 fixed mt-1" />

      {isShow && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleShow}
        ></div>
      )}
    </div>
  );
}

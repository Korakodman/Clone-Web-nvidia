import React from "react";
import { VscAccount, VscSearch } from "react-icons/vsc";
export default function Nav_right_menu() {
  return (
    <div>
      {" "}
      <div className="nav-right-menu flex">
        <div className="nav-right">
          <ul className=" flex font-[400px] ">
            <li className="sm:hidden md:block">Shop</li>
            <li className="ml-8 sm:hidden md:block">Drivers</li>
            <li className="ml-8 sm:hidden md:block">Support</li>
          </ul>
        </div>
        <div className="nav-right-logo flex text-center mt-1 ml-3 ">
          <VscSearch className="text-xl sm:hidden md:block" />
          <VscAccount className="ml-3 text-xl" />
        </div>
      </div>
    </div>
  );
}

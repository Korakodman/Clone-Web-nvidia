import React from "react";
import { VscAccount, VscSearch } from "react-icons/vsc";
export default function Nav_right_menu() {
  return (
    <div>
      {" "}
      <div className="nav-right-menu flex">
        <div className="nav-right">
          <ul className=" flex font-[400px] ">
            <li className="md:hidden lg:block">Shop</li>
            <li className="ml-8 md:hidden lg:block">Drivers</li>
            <li className="ml-8 md:hidden lg:block">Support</li>
          </ul>
        </div>
        <div className="nav-right-logo flex text-center mt-1 ml-3 ">
          <VscSearch className="text-xl md:hidden lg:block" />
          <VscAccount className="ml-3 text-xl" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { VscAccount, VscSearch } from "react-icons/vsc";
export default function Nav_right_menu() {
  return (
    <div>
      {" "}
      <div className="nav-right-menu flex">
        <div className="nav-right">
          <ul className=" flex font-[400px]">
            <li>Shop</li>
            <li className="ml-8">Drivers</li>
            <li className="ml-8">Support</li>
          </ul>
        </div>
        <div className="nav-right-logo flex text-center mt-1 ml-3">
          <VscSearch className="text-xl" />
          <VscAccount className="ml-3 text-xl" />
        </div>
      </div>
    </div>
  );
}

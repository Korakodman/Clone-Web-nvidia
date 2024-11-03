import React from "react";
import Nav_logo from "./Nav_logo";
import Nav_navigator from "./Nav_navigator";
import Nav_right_menu from "./Nav_right_menu";

export default function Nav() {
  return (
    <div className="sticky top-0 z-40 relative">
      <nav className="main-nav w-[100%] lg:h-11 md:h-16 bg-[#eee] content-center box-border p-2 justify-around flex">
        <div className="head-logo-navigator flex w-max">
          <Nav_logo />
          <Nav_navigator />
        </div>
        <Nav_right_menu />
      </nav>
    </div>
  );
}

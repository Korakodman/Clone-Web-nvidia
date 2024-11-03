import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import ImageGroup from "./ImageGroup";

export default function Slide_Image() {
  return (
    <div>
      <div className="contanier-Slide w-[100%] bg-[#1a1a1a] grid h-[475px] md:hidden lg:block ">
        <div className="Header-Slide text-white flex justify-around  h-[100px]">
          <div className="mr-[480px] flex h-20 items-center">
            <div className="text-4xl font-bold"> Recommended For You</div>
            <div className="">
              <IoSettingsOutline className=" text-xl ml-3 mt-3" />
            </div>
          </div>
          <div className="flex h-20 items-center text-black font-[400] font-mono">
            <a href="" className=" bg-[#6aa700] mr-5 px-3 py-1 ">
              {" "}
              &#10094;
            </a>
            <a href="" className=" bg-[#6aa700] mr-5 px-3 py-1">
              &#10095;
            </a>
          </div>
        </div>
        <div className="SlideRow flex-row flex ml-[135px] mb-[500px] justify-around relative">
          <ImageGroup />
          <ImageGroup />
          <ImageGroup />
          <ImageGroup />
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function ProgressBar_in_image() {
  return (
    <div>
      {" "}
      <div className="ProgressBar_in_image absolute text-white inset-x-0 bottom-0 h-20  sm:mx-10 md:mx-36 my-10 flex justify-center justify-between ">
        <div className=" ">
          <progress
            className=" md:w-[240px] sm:w-[100px] sm:mr-5 h-1 "
            value={100}
            max={100}
          ></progress>
          <p className=" text-white text-xs sm:hidden md:block">Data Center</p>
          <div className=" text-sm sm:hidden md:block">
            India Tech Leaders Build AI <br></br>Factories for Economic
            Transformation
          </div>
        </div>
        <div className=" ">
          <progress
            className=" md:w-[240px]  sm:w-[100px] sm:mr-5 h-1 "
            value={0}
            max={100}
          ></progress>
          <p className=" text-white text-xs sm:hidden md:block">
            Generative AI
          </p>
          <div className=" text-sm sm:hidden md:block">
            India Enterprises To Serve Over A Billion <br></br>Local Language
            Speakers With <br></br>NVIDIA AI
          </div>
        </div>
        <div>
          <progress
            className=" md:w-[240px]  sm:w-[100px] sm:mr-5  h-1"
            value={0}
            max={100}
          ></progress>
          <p className=" text-white text-xs sm:hidden md:block">
            Manufacturing
          </p>
          <div className=" text-sm sm:hidden md:block">
            India Adopts NVIDIA Omniverse <br></br>for Industrial AI
          </div>
        </div>

        <div>
          <progress
            className=" md:w-[240px]   sm:w-[100px] sm:mr-5 h-1"
            value={0}
            max={100}
          ></progress>
          <p className=" text-white text-xs sm:hidden md:block">Networking</p>
          <div className=" text-sm sm:hidden md:block">
            NVIDIA and F5 Turbocharge <br></br>Sovereign AI Clouds
          </div>
        </div>
        <div>
          <progress
            className=" md:w-[240px]  sm:w-[100px] sm:mr-5  h-1 "
            value={0}
            max={100}
          ></progress>
          <p className=" text-white text-xs sm:hidden md:block">
            Artificial Intelligence
          </p>
          <div className=" text-sm sm:hidden md:block">
            Introducing Gefion, Denmark’s <br></br>Leading Sovereign AI
            Supercomputer
          </div>
        </div>
      </div>
    </div>
  );
}

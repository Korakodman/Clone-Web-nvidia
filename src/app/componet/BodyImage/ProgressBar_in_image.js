import React from "react";

export default function ProgressBar_in_image() {
  return (
    <div>
      {" "}
      <div className="ProgressBar_in_image absolute text-white inset-x-0 bottom-0 h-20 mx-36 my-10 flex justify-center justify-between ">
        <div className=" ">
          <progress
            className=" w-[240px] h-1 "
            value={100}
            max={100}
          ></progress>
          <p className=" text-white text-xs">Data Center</p>
          <div className=" text-sm">
            India Tech Leaders Build AI <br></br>Factories for Economic
            Transformation
          </div>
        </div>
        <div className=" ">
          <progress className=" w-[240px] h-1 " value={0} max={100}></progress>
          <p className=" text-white text-xs">Generative AI</p>
          <div className=" text-sm">
            India Enterprises To Serve Over A Billion <br></br>Local Language
            Speakers With <br></br>NVIDIA AI
          </div>
        </div>
        <div>
          <progress className=" w-[240px] h-1" value={0} max={100}></progress>
          <p className=" text-white text-xs">Manufacturing</p>
          <div className=" text-sm">
            India Adopts NVIDIA Omniverse <br></br>for Industrial AI
          </div>
        </div>

        <div>
          <progress className=" w-[240px] h-1" value={0} max={100}></progress>
          <p className=" text-white text-xs">Networking</p>
          <div className=" text-sm">
            NVIDIA and F5 Turbocharge <br></br>Sovereign AI Clouds
          </div>
        </div>
        <div>
          <progress
            className=" w-[240px] h-1 bg-[#5E9400]"
            value={0}
            max={100}
          ></progress>
          <p className=" text-white text-xs">Artificial Intelligence</p>
          <div className=" text-sm">
            Introducing Gefion, Denmark’s <br></br>Leading Sovereign AI
            Supercomputer
          </div>
        </div>
      </div>
    </div>
  );
}

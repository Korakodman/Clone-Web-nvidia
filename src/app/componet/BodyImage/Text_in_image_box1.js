import React from "react";

export default function Text_in_image_box1() {
  return (
    <div>
      <div className="text-in-image-box1  h-[30rem] md:w-[45rem] box-border grid-flow-row md:mr-[20rem] ">
        <div className="header-text text-2xl h-10 text-white md:ml-[150px] sm:ml-[70px] ">
          Data Center
        </div>
        <div className=" font-bold text-5xl pb-10 text-white md:ml-[150px] sm:ml-[70px]">
          Introducing Gefion, Denmark’s Leading Sovereign AI Supercomputer
        </div>
        <p className="text-2xl   text-white md:ml-[150px] sm:ml-[70px] ">
          Announced at AI Summit India, leading cloud infrastructure providers
          <br></br>
          and server manufacturers are boosting accelerated data center capacity
          with thousands of NVIDIA Hopper™ GPUs.
        </p>
        <button className="mt-10 text-lg p-2 bg-[#5E9400] md:ml-[150px] sm:ml-[70px] font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
}

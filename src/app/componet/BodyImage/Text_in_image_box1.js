import React from "react";

export default function Text_in_image_box1() {
  return (
    <div>
      <div className="text-in-image-box1  h-[30rem] w-[45rem] box-border grid-flow-row mr-[20rem]">
        <div className="header-text text-2xl h-10 text-white ml-[150px] ">
          Data Center
        </div>
        <div className=" font-bold text-5xl pb-10 text-white ml-[150px]">
          Introducing Gefion, Denmark’s Leading Sovereign AI Supercomputer
        </div>
        <p className=" text-2xl text-white ml-[150px]">
          Announced at AI Summit India, leading cloud infrastructure providers
          <br></br>
          and server manufacturers are boosting accelerated data center capacity
          with thousands of NVIDIA Hopper™ GPUs.
        </p>
        <button className="mt-10 text-lg p-2 bg-[#5E9400] ml-[150px] font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
}

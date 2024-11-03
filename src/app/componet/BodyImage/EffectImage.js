import React from "react";
import Text_in_image_box1 from "./Text_in_image_box1";
import ProgressBar_in_image from "./ProgressBar_in_image";

function EffectImage() {
  return (
    <div className=" relative">
      <div className="container-image-background bg-black flex w-[100%] lg:h-[770px] justify-around pt-24 md:grid lg:flex md:h-[970px]">
        <Text_in_image_box1 />
        <div className="text-in-image-box2 mr-[100px] lg:w-[720px] md:w-[420px] md:ml-20 lg:ml-0">
          <img
            className=""
            src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/202104/6074736bed6ae559485763d0_b3cfff26-6195-4f21-a7cc-55f7f16af7a/b3cfff26-6195-4f21-a7cc-55f7f16af7a_mid.jpg"
          ></img>
        </div>
        <ProgressBar_in_image />
      </div>
    </div>
  );
}

export default EffectImage;

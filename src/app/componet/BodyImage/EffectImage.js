import React from "react";
import Text_in_image_box1 from "./Text_in_image_box1";
import ProgressBar_in_image from "./ProgressBar_in_image";

function EffectImage() {
  return (
    <div className=" relative">
      <div className="container-image-background bg-black flex w-[100%] md:h-[770px] justify-around pt-24 sm:grid md:flex sm:h-[970px]">
        <Text_in_image_box1 />
        <div className="text-in-image-box2 mr-[100px] md:w-[720px] sm:w-[420px] sm:ml-20 md:ml-0">
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

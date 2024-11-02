import React from "react";

export default function ImageGroup() {
  return (
    <div>
      <div className="column w-[330px] h-[280px] bg-white">
        <img
          className=""
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/graphics-cards/geforce-ada-4090-web-og-1200x630@2x.jpg"
        ></img>
        <div className="card-contanier p-3">
          <div className="Header-card text-xs font-light">Game | News</div>
          <div className="Second-card font-bold mt-1">Frames Win Game</div>
        </div>
      </div>
    </div>
  );
}

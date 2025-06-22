import React from "react";
import Forground from "./Forground";

const Background = () => (
  <div className="w-full h-screen fixed z-0 bg-gradient-to-b from-neutral-100 to-neutral-50">
    <Forground />
    <h1 className=" text-[5vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-x-[50%] font-semibold text-zinc-300 ">
      Do
    </h1>
  </div>
);

export default Background;

import React from "react";
import { useSelector } from "react-redux";

export default function PhysicalArea({ Area, title, description }) {
  return (
    <div className="space-y-4 pb-10">
      <div className={`${Area ? "bg-kineduBlue" : "bg-kineduRed"}`}>
        <hr className=" text-kineduWhite mr-4 ml-4 md:invisible sm:visible" />
        <div className="flex justify-center items-center">
          <div className="bg-kineduWhite h-px w-3/6 invisible md:visible" />
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-3xl text-kineduWhite py-6 font-bold">
            Skill: {title}
          </h2>
        </div>
        <div>
          <p className="text-lg	text-center pl-4 pr-4 md:pr-28 md:pl-28 pb-12 text-kineduWhite">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

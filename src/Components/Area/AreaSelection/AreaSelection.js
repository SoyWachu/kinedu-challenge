import React from "react";

export default function AreaSelection({ updateArea, Area }) {
  return (
    <div className={`${Area ? "bg-kineduBlue" : "bg-kineduRed"} pb-4`}>
      <div className="flex justify-center items-center w-full h-20 pt-4">
        <h1 className="text-2xl text-kineduWhite font-bold">Areas</h1>
      </div>
      <div className="flex justify-center items-center text-kineduWhite">
        <button
          onClick={() => updateArea(true)}
          className={`border-2 border-r-0 w-7/12 rounded-l-full ${
            Area
              ? "text-kineduBlue bg-kineduWhite"
              : "text-kineduWhite bg-kineduRed"
          } h-14 border-kineduWhite ml-6 text-lg md:w-52 font-bold`}
        >
          Physical
        </button>
        <button
          onClick={() => updateArea(false)}
          className={`border-2  w-7/12 rounded-r-full h-14  ${
            Area ? "" : " bg-kineduWhite text-kineduRed"
          } border-kineduWhite mr-6 text-lg md:w-52 font-bold`}
        >
          Social & emotional
        </button>
      </div>
    </div>
  );
}

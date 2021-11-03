import React from "react";

export default function FinishModal({ updateIsFinished }) {
  return (
    <div className=" flex justify-center items-center bg-kineduBlack bg-opacity-30 fixed -top-0 w-screen h-screen">
      <div className="bg-kineduWhite shadow-xl w-96 h-60 flex justify-center items-center flex-col rounded-lg">
        <h1 className="text-4xl p-4 font-bold text-kineduButton">
          Congratulations!
        </h1>
        <p className="p-4 pb-6 text-center">
          You finished all milestones from these areas, you must be so proud!
        </p>
        <button
          onClick={() => updateIsFinished(false)}
          className="bg-kineduButton p-2 rounded-full text-kineduWhite"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeMaster,
  saveCompletedMilestone,
  removeCompletedMilestone,
} from "../../redux/Milestone/actions";

const milestoneButton = {
  completed: {
    label: "Completed",
    style: "bg-kineduButton text-kineduWhite",
    mobileIconColor: "#FFFFFF",
    iconTextColor: "text-kineduButton",
  },
  uncompleted: {
    label: "Uncompleted",
    style: "bg-kineduLightGray text-kineduButton",
    mobileIconColor: "#75B753",
    iconTextColor: "text-kineduButton",
  },
  unanswered: {
    label: "Not answered",
    style: "bg-kineduLightGray text-kineduDarkGray",
    mobileIconColor: "#a8a8a8",
    iconTextColor: "text-kineduGray ",
  },
};

const getStatus = (clicked, completed) => {
  if (clicked) {
    if (completed) {
      return "completed";
    } else {
      return "uncompleted";
    }
  }

  return "unanswered";
};

export default function Milestone({
  title,
  description,
  master,
  id,
  completed,
  clicked,
}) {
  const status = getStatus(clicked, completed);
  const dispatch = useDispatch();

  const changeButton = () => {
    if (clicked) {
      if (completed) {
        dispatch(removeCompletedMilestone(id));
      } else {
        dispatch(saveCompletedMilestone(id));
      }
    } else {
      dispatch(changeMaster(id));
    }
  };
  return (
    <div className="flex items-center justify-between w-full md:w-11/12 px-4 py-6 bg-kineduWhite">
      <div className="w-52 md:w-96">
        <h1 className="text-lg text-kineduDarkGray">{title}</h1>
        <h1 className="text-sm text-kineduGray">{description}</h1>
      </div>
      <div className="hidden sm:hidden md:flex">
        <button
          onClick={changeButton}
          className={`h-14 w-48 rounded-full font-bold text-xl ${milestoneButton[status].style}`}
        >
          {milestoneButton[status].label}
        </button>
      </div>
      <div
        onClick={changeButton}
        className="flex justify-center items-center flex-col visible sm:visible md:hidden"
      >
        <div
          className={`h-14 w-14 flex justify-center items-center rounded-full md:invisible ${milestoneButton[status].style}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke={`${milestoneButton[status].mobileIconColor}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1
          className={`md:invisible font-bold ${milestoneButton[status].iconTextColor}`}
        >
          {milestoneButton[status].label}
        </h1>
      </div>
    </div>
  );
}

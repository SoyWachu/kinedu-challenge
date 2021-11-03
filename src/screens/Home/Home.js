import React, { useEffect, useState } from "react";
import PhysicalArea from "../../Components/Area/PhysicalArea/PhysicalArea";
import AreaSelection from "../../Components/Area/AreaSelection/AreaSelection";
import MilestoneList from "../../Components/MilestoneList/MilestoneList";
import FinishModal from "../../Components/FinishModal/FinishModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMilestoneRequest,
  fetchMilestones,
  fetchMilestonesB,
} from "../../redux/Milestone/actions";

export default function Home() {
  const [isPhysical, setisPhysical] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const dispatch = useDispatch();
  const {
    data: skill,
    completed: milestonesCompleted,
    clicked: milestonesClicked,
    loading,
  } = useSelector((state) => state.milestone);

  const updateArea = (area) => {
    setisPhysical(area);
  };

  const updateIsFinished = (finished) => {
    setIsFinished(finished);
  };

  useEffect(() => {
    dispatch(fetchMilestoneRequest());
    if (isPhysical) {
      dispatch(fetchMilestones());
    } else {
      dispatch(fetchMilestonesB());
    }
  }, [dispatch, isPhysical]);

  return (
    <div className="md:w-8/12 bg-kineduWhite shadow-xl">
      <div className="justify-center flex items-center"></div>
      <div>
        <AreaSelection updateArea={updateArea} Area={isPhysical} />
        <PhysicalArea
          updateArea={updateArea}
          Area={isPhysical}
          title={skill.title}
          description={skill.description}
        />
        {loading ? (
          <div class="flex justify-center items-center h-screen">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
          </div>
        ) : (
          <MilestoneList
            milestones={skill.milestones}
            milestonesCompleted={milestonesCompleted}
            milestonesClicked={milestonesClicked}
          />
        )}
        <div className="flex justify-center items-center pb-16 ">
          {isPhysical ? (
            <button
              onClick={() => setisPhysical(false)}
              className="h-12 bg-kineduButton mr-4 ml-4 rounded-full text-xl  text-kineduWhite cursor-pointer focus:outline-none w-11/12 md:w-4/12 font-bold"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setIsFinished(true)}
              className="h-12 bg-kineduButton mr-4 ml-4 rounded-full text-xl  text-kineduWhite cursor-pointer focus:outline-none w-11/12 md:w-4/12 font-bold"
            >
              Finish assessment
            </button>
          )}
          {isFinished ? (
            <FinishModal updateIsFinished={updateIsFinished} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

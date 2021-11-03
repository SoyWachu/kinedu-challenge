import React from "react";
import Milestone from "../Milestone/Milestone";

export default function MilestoneList({
  milestones,
  milestonesCompleted,
  milestonesClicked,
}) {
  // if (milestones.loading && milestones.data.length === 0)
  return (
    <div className="divide-y-2 divide-kineduLightGray mr-4 ml-4 flex justify-center flex-col items-center">
      {milestones?.map((milestones) => {
        return (
          <Milestone
            title={milestones.title}
            description={milestones.description}
            time={milestones.time}
            master={milestones.master}
            id={milestones.id}
            completed={milestonesCompleted?.includes(milestones.id)}
            clicked={milestonesClicked?.includes(milestones.id)}
            key={milestones.id}
          />
        );
      })}
    </div>
  );
}

import axios from "axios";
import {
  FETCH_MILESTONE_SUCCESS,
  FETCH_MILESTONE_REQUEST,
  FETCH_MILESTONE_FAILURE,
  CHANGE_MASTER,
  SAVE_COMPLETED_MILESTONE,
  REMOVE_COMPLETED_MILESTONE,
} from "./types";

export const fetchMilestoneRequest = () => {
  return {
    type: FETCH_MILESTONE_REQUEST,
  };
};
export const fetchMilestoneFailure = (error) => {
  return {
    type: FETCH_MILESTONE_FAILURE,
    payload: error,
  };
};
export const fetchMilestoneSuccess = (milestones) => {
  return {
    type: FETCH_MILESTONE_SUCCESS,
    payload: milestones,
  };
};
export const changeMaster = (id) => {
  return {
    type: CHANGE_MASTER,
    payload: id,
  };
};

export const saveCompletedMilestone = (id) => {
  return {
    type: SAVE_COMPLETED_MILESTONE,
    payload: id,
  };
};

export const removeCompletedMilestone = (id) => {
  return {
    type: REMOVE_COMPLETED_MILESTONE,
    payload: id,
  };
};

export const fetchMilestones = () => {
  return (dispatch) => {
    axios
      .get("https://staging.kinedu.com/api/v3/skills/23/milestones", {
        headers: {
          Authorization:
            "Token token=ef7855b8ff5d65e9c19f24fa016590c461377b7f8de4d2a069d57bde86b58bcd4262fe3d5d2512bf96010c1d3b2e50646a11d6cfb765ddf81333358e9a7779fa",
        },
      })
      .then((res) => {
        dispatch(fetchMilestoneSuccess(res.data.data.skill));
      })
      .catch((error) => {
        dispatch(fetchMilestoneFailure(error.message));
      });
  };
};
export const fetchMilestonesB = () => {
  return (dispatch) => {
    axios
      .get("https://staging.kinedu.com/api/v3/skills/2/milestones", {
        headers: {
          Authorization:
            "Token token=ef7855b8ff5d65e9c19f24fa016590c461377b7f8de4d2a069d57bde86b58bcd4262fe3d5d2512bf96010c1d3b2e50646a11d6cfb765ddf81333358e9a7779fa",
        },
      })
      .then((res) => {
        dispatch(fetchMilestoneSuccess(res.data.data.skill));
      })
      .catch((error) => {
        dispatch(fetchMilestoneFailure(error.message));
      });
  };
};

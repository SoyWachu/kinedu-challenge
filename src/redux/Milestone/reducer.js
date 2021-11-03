import {
  FETCH_MILESTONE_SUCCESS,
  FETCH_MILESTONE_REQUEST,
  FETCH_MILESTONE_FAILURE,
  CHANGE_MASTER,
  SAVE_COMPLETED_MILESTONE,
  REMOVE_COMPLETED_MILESTONE,
} from "./types";

const initialState = {
  loading: false,
  data: [],
  error: "",
  completed: [],
  clicked: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MILESTONE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_MILESTONE_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    }
    case FETCH_MILESTONE_FAILURE: {
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    }
    case CHANGE_MASTER: {
      const milestone = state.data?.milestones?.find(
        (el) => el.id === action.payload
      );
      return {
        ...state,
        clicked: [...state.clicked, action.payload],
        completed:
          !!milestone.master && !state.completed.includes(action.payload)
            ? [...state.completed, action.payload]
            : state.completed,
      };
    }
    case SAVE_COMPLETED_MILESTONE: {
      return {
        ...state,
        completed: [...state.completed, action.payload],
      };
    }

    case REMOVE_COMPLETED_MILESTONE: {
      return {
        ...state,
        completed: state.completed?.filter((e) => e !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default reducer;

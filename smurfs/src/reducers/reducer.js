import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS } from "../actions";

const initialState = {
  isLoading: false,
  smurf: null,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurf: action.payload
      };
    default:
      return state;
  }
};

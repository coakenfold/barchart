import { UPDATE_CHART_DATA, API_ERROR } from "./constants";
export default function counter(
  state = { chart: [], apiError: false },
  action
) {
  switch (action.type) {
    case UPDATE_CHART_DATA:
      return {
        ...state,
        chart: action.data,
        apiError: false,
      };
    case API_ERROR:
      return {
        ...state,
        chart: [],
        apiError: true,
      };
    default:
      return state;
  }
}

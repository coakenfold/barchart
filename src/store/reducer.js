import { UPDATE_CHART_DATA } from "./constants";
export default function counter(state = { chart: [] }, action) {
  switch (action.type) {
    case UPDATE_CHART_DATA:
      return {
        ...state,
        chart: action.data,
      };
    default:
      return state;
  }
}

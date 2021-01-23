import { UPDATE_CHART_DATA, REQUEST_CHART_DATA } from "./constants";

export const requestChartData = () => ({
  type: REQUEST_CHART_DATA,
});

export const updateChartData = (data) => ({
  type: UPDATE_CHART_DATA,
  data,
});

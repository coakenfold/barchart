import { UPDATE_CHART_DATA, REQUEST_CHART_DATA, API_ERROR } from "./constants";

export const requestChartData = () => ({
  type: REQUEST_CHART_DATA,
});

export const apiError = () => ({
  type: API_ERROR,
});

export const updateChartData = (data) => ({
  type: UPDATE_CHART_DATA,
  data,
});

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestChartData } from "../../store/actions";
import styles from "./App.styles";
import Chart from "../Chart/Chart";
import ApiError from "../ApiError/ApiError";

function App() {
  const apiError = useSelector((state) => state.apiError);
  const chart = useSelector((state) => state.chart);
  const dispatch = useDispatch();
  const classes = styles();
  return (
    <main role="main" className={classes.app}>
      <h1>Technical Test</h1>
      {apiError && <ApiError />}
      <button
        disabled={apiError || chart.length !== 0}
        type="button"
        className={classes.getDataButton}
        onClick={() => {
          dispatch(requestChartData());
        }}
      >
        Get chart data
      </button>
      {chart.length !== 0 && <Chart data={chart} />}
    </main>
  );
}

export default App;

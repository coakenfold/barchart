import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestChartData } from "./store/actions";
import styles from "./App.styles";
import Chart from "./Chart";

function App() {
  const apiError = useSelector((state) => state.apiError);
  const chart = useSelector((state) => state.chart);
  const dispatch = useDispatch();
  const classes = styles();
  return (
    <div className={classes.app}>
      {apiError && <div className={classes.errorMessage}>API is down</div>}
      <button
        disabled={apiError}
        type="button"
        className={classes.getDataButton}
        onClick={() => {
          dispatch(requestChartData());
        }}
      >
        Get chart data
      </button>
      {chart.length !== 0 && <Chart data={chart} />}
    </div>
  );
}

export default App;

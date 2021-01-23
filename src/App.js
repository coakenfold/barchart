import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestChartData } from "./store/actions";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  appRoot: {
    fontSize: "16px",
    fontFamily: "Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif",
    lineHeight: "1.625",
  },
  getDataButton: {
    fontSize: "inherit",
    color: "rgb(255,255,255, 1)",
    transitionProperty: "all",
    transitionDuration: "0.75ms",
    padding: {
      left: "1rem",
      right: "1rem",
      top: "0.5rem",
      bottom: "0.5rem",
    },
    fontWeight: 700,
    border: "4px solid rgb(43,108,176)",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderRadius: "0.25rem",
    backgroundColor: "rgb(66,153,225, 1)",
    cursor: "pointer",
    "&:hover": {
      borderColor: "rgb(66,153,225)",
      backgroundColor: "rgb(99,179,237)",
      color: "rgb(255,255,255)",
    },
    "&:disabled": {
      opacity: "0.5",
      borderColor: "rgb(66,153,225)",
      backgroundColor: "rgb(99,179,237)",
      color: "rgb(255,255,255)",
      cursor: "not-allowed",
    },
  },
  errorMessage: {
    backgroundColor: "rgb(255,245,245)",
    border: "1px solid rgb(252,129,129)",
    padding: "0.75rem 1rem",
    color: "rgb(197, 48, 48)",
    borderRadius: ".25rem",
    marginBottom: "1rem",
  },
  chart: {
    boxShadow: "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
    borderRadius: ".25rem",
    maxWidth: "24rem",
    color: "rgb(74,85,104,1)",
    padding: "1rem 1.5rem",
  },
});
function Chart({ data }) {
  return data.map(({ id, label, volume }) => {
    return (
      <div key={id}>
        {label}: {volume}
      </div>
    );
  });
}
function App({ action }) {
  const apiError = useSelector((state) => state.apiError);
  const chart = useSelector((state) => state.chart);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
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
      {chart.length !== 0 && (
        <div className={classes.chart}>
          <Chart data={chart} />
        </div>
      )}
    </div>
  );
}

export default App;

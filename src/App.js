import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestChartData } from "./store/actions";
function App({ action }) {
  const apiError = useSelector((state) => state.apiError);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {apiError ? (
        <div>API is down</div>
      ) : (
        <button
          onClick={() => {
            dispatch(requestChartData());
          }}
        >
          Get chart data
        </button>
      )}
    </div>
  );
}

export default App;

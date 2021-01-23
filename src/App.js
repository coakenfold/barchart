import React from "react";
import { REQUEST_CHART_DATA } from "./store/constants";
function App({ action }) {
  return (
    <div className="App">
      <button onClick={() => action(REQUEST_CHART_DATA)}>
        REQUEST_CHART_DATA
      </button>
    </div>
  );
}

export default App;

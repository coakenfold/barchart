import React from "react";
import "./App.css";

function App({ action }) {
  return (
    <div className="App">
      <button onClick={() => action("INCREMENT")}>Increment</button>
      <button onClick={() => action("DECREMENT")}>DECREMENT</button>
      <button onClick={() => action("INCREMENT_ASYNC")}>INCREMENT_ASYNC</button>
      <button onClick={() => action("INCREMENT_IF_ODD")}>
        INCREMENT_IF_ODD
      </button>
    </div>
  );
}

export default App;

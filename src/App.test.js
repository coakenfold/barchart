import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

test("renders", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/get chart data/i)).toBeInTheDocument();
});

test("handles api down", () => {
  store.dispatch({ type: "API_ERROR" });
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/API is down/i)).toBeInTheDocument();
});

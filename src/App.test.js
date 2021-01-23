import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

test("renders", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App action={(type) => store.dispatch({ type })} />
    </Provider>
  );

  expect(getByText(/REQUEST_CHART_DATA/i)).toBeInTheDocument();
});

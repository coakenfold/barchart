import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App action={(type) => store.dispatch({ type })} />
    </Provider>
  );

  expect(getByText(/INCREMENT_ASYNC/i)).toBeInTheDocument();
});

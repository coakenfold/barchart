import Chart from "./Chart";
import { render } from "@testing-library/react";
const data = [{ id: 1, label: "label 1", volume: 5, normalized: 0.5 }];
test("renders", () => {
  const { getByText } = render(<Chart data={data} />);
  expect(getByText(/sales for the year/i)).toBeInTheDocument();
  expect(getByText(/label 1 sales volume: 5/i)).toBeInTheDocument();
});

import Bars from "./Bars";
import { render } from "@testing-library/react";
const data = [{ id: 1, label: "label 1", volume: 5, normalized: 0.5 }];
describe("Bars", () => {
  test("renders", () => {
    const { getByText } = render(
      <ul>
        <Bars data={data} />
      </ul>
    );

    expect(getByText(/label 1 sales volume: 5/i)).toBeInTheDocument();
  });
});

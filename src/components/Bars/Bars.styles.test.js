import { generateStyleObject } from "./Bars.styles";
const data = [
  { id: 1, label: "label 1", volume: 5, normalized: 0.5 },
  {
    id: 2,
    label: "label 2",
    volume: 7,
    normalized: 0.8333333333333334,
  },
  { id: 3, label: "label 3", volume: 2, normalized: 0 },
  { id: 4, label: "label 4", volume: 8, normalized: 1 },
  {
    id: 5,
    label: "label 5",
    volume: 3,
    normalized: 0.16666666666666666,
  },
];
describe("Bars.styles", () => {
  test("works", () => {
    const classes = generateStyleObject({
      data,
      barBase: { outline: "solid" },
    });
    expect(classes).toEqual({
      id_1: { height: "6rem", outline: "solid" },
      id_2: { height: "9.333333333333334rem", outline: "solid" },
      id_3: { height: "1rem", outline: "solid" },
      id_4: { height: "11rem", outline: "solid" },
      id_5: { height: "2.6666666666666665rem", outline: "solid" },
    });
  });
});

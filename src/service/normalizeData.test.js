import normalizeData, { getMinMax, getRange } from "./normalizeData";
const data = [
  { id: 1, label: "label 1", volume: 5 },
  { id: 2, label: "label 2", volume: 7 },
  { id: 3, label: "label 3", volume: 2 },
  { id: 4, label: "label 4", volume: 8 },
  { id: 5, label: "label 5", volume: 3 },
];
describe("normalizeData", () => {
  test("getMinMax", () => {
    const { min, max } = getMinMax(data);
    expect(min).toEqual(2);
    expect(max).toEqual(8);
  });
  test("getRange", () => {
    const range = getRange({ min: 2, max: 100 });
    expect(range).toEqual(98);
  });
  test("normalizeData", () => {
    const initialData = [...data];
    const normalized = normalizeData(data);
    expect(normalized).toEqual([
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
    ]);
    expect(data).toEqual(initialData);
  });
});

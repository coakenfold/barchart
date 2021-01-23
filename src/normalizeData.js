export const getMinMax = (data) => {
  return data.reduce(({ min, max }, { volume: cur }) => {
    if (min === undefined) {
      return { min: cur, max: cur };
    }
    if (min === cur || max === cur) {
      return { min, max };
    }
    if (min > cur) {
      return { max, min: cur };
    }
    if (max < cur) {
      return { min, max: cur };
    }
    return { min, max };
  }, {});
};
export const getRange = ({ min, max }) => {
  return max - min;
};
const normalizeData = (data) => {
  const { min, max } = getMinMax(data);
  const range = getRange({ min, max });
  const normalized = data.map((cur) => {
    cur.normalized = (cur.volume - min) / range;
    return cur;
  });
  return normalized;
};
export default normalizeData;

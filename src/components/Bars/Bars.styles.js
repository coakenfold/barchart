import { createUseStyles } from "react-jss";
export const generateStyleObject = ({ data, barBase = {} }) => {
  return data.reduce((accumulator, { id, normalized }) => {
    return {
      ...accumulator,
      [`id_${id}`]: {
        height: `${normalized * 10 + 1}rem`,
        ...barBase,
      },
    };
  }, {});
};
const barsStyles = ({ data, barBase, styles }) => {
  const bars = generateStyleObject({ data, barBase });
  return createUseStyles({ ...bars, ...styles });
};

export default barsStyles;

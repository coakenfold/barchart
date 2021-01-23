import PropTypes from "prop-types";
import styles from "./Bars.styles";
function Bars({ data, displayData }) {
  const classes = styles({
    data,
    barBase: {
      backgroundColor: "rgb(49,130,206)",
      width: "7.6%",
      "&:hover": {
        backgroundColor: "rgba(99,179,237)",
      },
    },
    styles: {
      sr: {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whitepace: "nowrap",
        borderWidth: 0,
      },
    },
  })();
  return data.map(({ id, label, volume }) => {
    const barText = `${label} sales volume: ${volume}`;
    return (
      <li
        key={id}
        tabIndex={0}
        className={classes[`id_${id}`]}
        onFocus={() => {
          displayData(barText);
        }}
        onMouseEnter={() => {
          displayData(barText);
        }}
        onMouseLeave={() => {
          displayData();
        }}
        onBlur={() => {
          displayData();
        }}
      >
        <span className={classes.sr}>{barText}</span>
      </li>
    );
  });
}
const { func, arrayOf, object } = PropTypes;
Bars.propTypes = {
  data: arrayOf(object),
  displayData: func,
};
export default Bars;

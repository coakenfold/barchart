import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import styles from "./Chart.styles";
import Bars from "../Bars/Bars";
function Chart({ data }) {
  const mainRef = useRef(null);
  const classes = styles();
  const placeholder = "Interact with a bar for more info";
  const [display, setDisplay] = useState(placeholder);
  useEffect(() => {
    mainRef.current.focus();
  }, [mainRef]);
  return (
    <section className={classes.chartRoot}>
      <div className={classes.chartMeta}>
        <h1 tabIndex={0} ref={mainRef} className={classes.chartTitle}>
          Sales for the year
        </h1>
        <p className={classes.display}>{display}</p>
      </div>
      <ul className={classes.chart}>
        <Bars
          data={data}
          displayData={(text = placeholder) => {
            setDisplay(text);
          }}
        />
      </ul>
    </section>
  );
}
const { arrayOf, object } = PropTypes;
Chart.propTypes = {
  data: arrayOf(object),
};
export default Chart;

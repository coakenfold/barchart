import { useState } from "react";
import styles from "./Chart.styles";
import Bars from "./Bars";
function Chart({ data }) {
  const classes = styles();
  const placeholder = "Interact with a bar for more info";
  const [display, setDisplay] = useState(placeholder);
  return (
    <div className={classes.chartRoot}>
      <ul className={classes.chart}>
        <Bars
          data={data}
          displayData={(text = placeholder) => {
            setDisplay(text);
          }}
        />
      </ul>
      <div className={classes.chartMeta}>
        <h1 className={classes.chartTitle}>Sales for the year</h1>
        <p className={classes.display}>{display}</p>
      </div>
    </div>
  );
}
export default Chart;

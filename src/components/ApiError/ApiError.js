import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import styles from "./ApiError.styles";
function Chart({ data }) {
  const mainRef = useRef(null);
  const classes = styles();
  useEffect(() => {
    mainRef.current.focus();
  }, [mainRef]);
  return (
    <h2 tabIndex={0} ref={mainRef} className={classes.errorMessage}>
      API is down
    </h2>
  );
}
const { arrayOf, object } = PropTypes;
Chart.propTypes = {
  data: arrayOf(object),
};
export default Chart;

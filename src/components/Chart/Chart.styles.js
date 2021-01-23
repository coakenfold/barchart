import { createUseStyles } from "react-jss";
const chartStyles = createUseStyles({
  chartRoot: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
    color: "rgb(74,85,104,1)",
    margin: "1rem",
    flexDirection: "column-reverse",
    borderRadius: ".5rem",
    overflow: "hidden",
  },
  chart: {
    display: "flex",
    listStyleType: "none",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "rgb(17, 24, 39)",
    margin: 0,
    padding: 0,
  },
  chartMeta: {
    minHeight: "4rem",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1.5rem",
  },
  chartTitle: {
    color: "rgb(74, 85, 104)",
    fontSize: "1.25rem",
    fontWeight: 700,
    margin: "0 0 0.5rem",
  },
  display: {
    fontSize: "0.75rem",
    margin: 0,
  },
});

export default chartStyles;

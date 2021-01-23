import { createUseStyles } from "react-jss";
const appStyles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  getDataButton: {
    fontSize: "inherit",
    color: "rgb(255,255,255, 1)",
    transitionProperty: "all",
    transitionDuration: "0.75ms",
    padding: {
      left: "1rem",
      right: "1rem",
      top: "0.5rem",
      bottom: "0.5rem",
    },
    fontWeight: 700,
    border: "4px solid rgb(43,108,176)",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderRadius: "0.25rem",
    backgroundColor: "rgb(66,153,225, 1)",
    cursor: "pointer",
    "&:hover": {
      borderColor: "rgb(66,153,225)",
      backgroundColor: "rgb(99,179,237)",
      color: "rgb(255,255,255)",
    },
    "&:disabled": {
      opacity: "0.5",
      borderColor: "rgb(66,153,225)",
      backgroundColor: "rgb(99,179,237)",
      color: "rgb(255,255,255)",
      cursor: "not-allowed",
    },
  },
  errorMessage: {
    backgroundColor: "rgb(255,245,245)",
    border: "1px solid rgb(252,129,129)",
    padding: "0.75rem 1rem",
    color: "rgb(197, 48, 48)",
    borderRadius: ".25rem",
    marginBottom: "1rem",
  },
});

export default appStyles;

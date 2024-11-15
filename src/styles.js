// src/styles.js
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 400,
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  rootTM: {
    width: 220,
    height: 450,
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px 4px 0 0",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    padding: "10px 0 0 0",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "100px",
  },
});

export default useStyles;

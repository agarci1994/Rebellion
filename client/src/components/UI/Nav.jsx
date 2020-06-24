import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getCSV } from "../../services/cloudinary.services";
import download from "downloadjs";

const Nav = () => {
  const classes = useStyles();

  const downloadCSV = async () => {
    try {
      let CSV = await getCSV();
      download(CSV, "cloudinary.csv", "text/csv");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <img className={classes.logo} src="../../../logo.jpg" alt="logo" />
          <Typography variant="h6" className={classes.title}>
            Welcome Rebel!
          </Typography>
          <Button className={classes.button} onClick={() => downloadCSV()}>Download CSV</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "white",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  logo: {
    width: "3%",
    paddingRight: 20,
  },
  button: {
    marginRight: 15,
    backgroundColor: '#f5ff00',
    borderRadius: 7
  }
});

export default Nav

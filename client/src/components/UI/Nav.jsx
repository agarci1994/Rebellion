import React from "react";

// Services
import { getCSV } from "../../services/cloudinary.services";
// NPM
import download from "downloadjs";
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// Styles
import { makeStyles } from "@material-ui/core/styles";


const Nav = () => {
  const classes = useStyles();

  // Services
  const downloadCSV = async () => {
    try {
      let CSV = await getCSV();
      download(CSV, "cloudinary.csv", "text/csv");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <img className='logo' src="../../../logo.jpg" alt="logo" />
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
  nav: {
    backgroundColor: "white",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  button: {
    marginRight: 15,
    backgroundColor: '#f5ff00',
    borderRadius: 7
  }
});

export default Nav

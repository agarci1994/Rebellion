import React from "react";

// NPM
import { Doughnut } from "react-chartjs-2";
// Material UI
import CircularProgress from "@material-ui/core/CircularProgress";
// Styles
import { makeStyles } from "@material-ui/core/styles";

const TotalImage = ({ data, doughnutOptions }) => {
  const classes = useStyles();

  return (
    <div className="main">
    
      {!data && (
        <div className={classes.root}>
          <CircularProgress color="secondary" />
        </div>
      )}

      <div className="chart">
        <Doughnut
          data={doughnutOptions}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      
      {data && <h1 className="title">Total images: {data.totalImages}</h1>}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "50%",
    margin: "auto",
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default TotalImage;

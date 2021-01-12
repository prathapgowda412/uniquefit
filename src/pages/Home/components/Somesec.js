import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "80px",
  },
  someimg: {
    width: "100%",
    height: "auto",
  },
}));

function Somesec() {
  const classes = useStyles();
  return (
    <Grid item container xs={12} className={classes.main}>
      <Hidden smUp>
        <img
          alt="Uniquefit ,clothing brand"
          className={classes.someimg}
          src={require("./statics/images/securemob.png")}
        />
      </Hidden>
      <Hidden xsDown>
        <img
          alt="Uniquefit ,clothing brand"
          className={classes.someimg}
          src={require("./statics/images/securedesk.png")}
        />
      </Hidden>
    </Grid>
  );
}

export default Somesec;

import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
// import {} from '@material-ui/core/Button';
// import { Link } from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    height: "auto",
    // backgroundColor: 'grey',
    position: "relative",
    // height: '70vh',
    [theme.breakpoints.down("sm")]: {
      height: "fit-content",
    },
  },

  media: {
    height: 500,
  },
  headingbox: {
    position: "absolute",
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headingone: {
    fontSize: "49px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "29px",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  Shopnowbutton: {
    color: "white",
    backgroundColor: "#387A76",
    padding: "10px 69px",
    fontSize: "18px",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#034b46",
    },
  },
  heroimg: {
    width: "100%",
  },
}));

function Firstsec() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      alignContent="stretch"
      className={classes.root}
    >
      <Hidden smUp>
        <Link to="/Shop">
          <img
            alt="Uniquefit ,clothing brand"
            className={classes.heroimg}
            src={require("./statics/images/Herosectionmob.png")}
          />
        </Link>
      </Hidden>
      <Hidden xsDown>
        <Link to="/Shop">
          <img
            alt="Uniquefit ,clothing brand"
            className={classes.heroimg}
            src={require("./statics/images/Hero_section.jpg")}
          />
        </Link>
      </Hidden>
      {/* <Hidden> two</Hidden> */}
      {/* <Box className={classes.headingbox}>
				<Typography variant="h1" className={classes.headingone}>
					Customize your cloths on your own preferences
				</Typography>

				<Button className={classes.Shopnowbutton}>
					<Link className={classes.link} to="/Shop">
						Shop Now
					</Link>
				</Button>
			</Box>
			<Grid item container xs={6} sm={6}>
				<img src={manimage} width="100%" height="100%" />
			</Grid>
			<Grid item container xs={6} sm={6}>
				<img src={girlimage} width="100%" />
			</Grid> */}
    </Grid>
  );
}
export default Firstsec;

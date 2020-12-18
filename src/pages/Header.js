import React, { Component, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Uniquefit_blacklogosvg from "../logos/Uniquefit logo.svg";
import uniquefit_monogramblack from "../logos/Unique fit monogram.svg";

<<<<<<< HEAD
import { withStyles } from '@material-ui/styles';
import {
	AppBar,
	Avatar,
	Box,
	Icon,
	List,
	Menu,
	Toolbar,
	Typography,
	Drawer,
	Paper,
	Container,
	Hidden,
	Popover,
} from '@material-ui/core';
import '../custom.css';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Aboutsection from './aboutsection';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../auth';
import CloseIcon from '@material-ui/icons/Close';
import axio from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';
import Axios from 'axios';
import HeaderStyles from '../css/HeaderStyles';
import { toast } from 'react-toastify';
=======
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { withStyles } from "@material-ui/styles";
import {
  AppBar,
  Avatar,
  Box,
  Icon,
  List,
  ListItem,
  makeStyles,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
  Drawer,
  Paper,
  IconButton,
  Container,
  Hidden,
  Grid,
  ButtonGroup,
  Popover,
  Popper,
} from "@material-ui/core";
import "../custom.css";
import MenuIcon from "@material-ui/icons/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// import Aboutsection from './aboutsection';
import { Link, NavLink } from "react-router-dom";
import { render } from "@testing-library/react";
import { styled } from "@material-ui/core/styles";
import breakpoint from "styled-components-breakpoint";
import users from "../data/users.json";
import { width } from "@material-ui/system";
import { UserContext } from "../auth";
import CloseIcon from "@material-ui/icons/Close";
import axio from "axios";
import { config } from "@fortawesome/fontawesome-svg-core";
import Axios from "axios";
import { green } from "@material-ui/core/colors";
import { ImageSearchRounded } from "@material-ui/icons";
import HeaderStyles from "../css/HeaderStyles";
import { toast } from "react-toastify";
import { getProfileDetails } from "./../services/fetchService";
>>>>>>> 516f2cdec25b6f75ab8b5f7bd29f6dea5d8af755

const styles = HeaderStyles();

// use popper for drop down

class Header extends Component {
	constructor() {
		super();

<<<<<<< HEAD
		this.state = {
			open: false,
			anchorEl: null,
			username: '',
			islogged: false,
			tshirtcomingsoon: 'Tshirts',
			usertoken: null,
		};
	}
=======
    this.state = {
      open: false,
      anchorEl: null,
      username: "",
      islogged: false,
      tshirtcomingsoon: "Tshirts",
      usertoken: null,
    };
  }
>>>>>>> 516f2cdec25b6f75ab8b5f7bd29f6dea5d8af755

	//  new popover down
	handleClosePop = () => {
		this.setState({ anchorEl: null });
	};
	handleClickPop = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};
	//  new popover up

	// const uservalue = useContext(UserContext);
	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	handleToggle = () => {
		this.setState({ open: this.state.open ? false : true });
	};

<<<<<<< HEAD
	componentDidMount = async () => {
		let token = localStorage.getItem('usertoken');

		if (token) {
			console.log('user logged');
			this.setState({ islogged: true });
			const config = {
				headers: {
					'Content-Type': 'application/json',
					token: token,
				},
			};

			const resp = await Axios.get(`${process.env.REACT_APP_API_URL}/users/me`, config);
			// console.log(resp.data);
			if (resp.data.message == 'Token has expired') {
				toast.warning('User session has Expired \n Please Login');
				localStorage.removeItem('usertoken');
				localStorage.removeItem('tokens');
				this.setState({ islogged: false });
				// window.location.reload();
			}
		} else {
			console.log('not logged');
			this.setState({ islogged: false });
		}
	};

	handlecomingsoon = () => {
		this.setState({ tshirtcomingsoon: 'Coming soon *' });
	};
	handlecomingsoonchange = () => {
		this.setState({ tshirtcomingsoon: 'Tshirts' });
	};
	// coming soon change above

	handlelogout = () => {
		this.setState({ username: '', islogged: false });

		localStorage.removeItem('usertoken');
		localStorage.removeItem('tokens');
		window.location.reload();
	};
=======
  componentDidMount = async () => {
    let token = localStorage.getItem("usertoken");

    if (token) {
      console.log("user logged");
      this.setState({ islogged: true });
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      };

      const resp = await getProfileDetails(config);
      // console.log(resp.data);
      if (resp.data.message == "Token has expired") {
        toast.warning("User session has Expired \n Please Login");
        localStorage.removeItem("usertoken");
        localStorage.removeItem("tokens");
        this.setState({ islogged: false });
        // window.location.reload();
      }
    } else {
      console.log("not logged");
      this.setState({ islogged: false });
    }
  };

  handlecomingsoon = () => {
    this.setState({ tshirtcomingsoon: "Coming soon *" });
  };
  handlecomingsoonchange = () => {
    this.setState({ tshirtcomingsoon: "Tshirts" });
  };
  // coming soon change above

  handlelogout = () => {
    this.setState({ username: "", islogged: false });

    localStorage.removeItem("usertoken");
    localStorage.removeItem("tokens");
    window.location.reload();
  };
>>>>>>> 516f2cdec25b6f75ab8b5f7bd29f6dea5d8af755

	render() {
		// this.checkUserLogged();
		const { classes } = this.props;

<<<<<<< HEAD
		const popoveropen = Boolean(this.state.anchorEl);
		const id = popoveropen ? 'simple-popover' : undefined;

		const Userlog = () => {
			if (!this.state.islogged) {
				return (
					<Box className={classes.loginsignup}>
						<Button>
							<Link className={classes.loginbuton} to="/Login">
								Login
							</Link>
						</Button>
						<Button>
							<Link className={classes.signupboton} to="/Signup">
								Signup
							</Link>
						</Button>
						<Link to="/Signup">
							<Button>
								<img src={require('../statics/header/bag_icon.svg')} />
							</Button>
						</Link>
					</Box>
				);
			} else {
				return (
					<Box className={classes.loginsignup}>
						<Button onClick={this.handlelogout}>Logout</Button>
						<Link className={classes.profilelink} to={`/Profile/info`}>
							<Button>
								<img src={require('../statics/header/header_profile_icon.svg')} />
							</Button>
						</Link>
						<Link to="/Cart">
							<Button>
								<img src={require('../statics/header/bag_icon.svg')} />
							</Button>
						</Link>
					</Box>
				);
			}
		};

		const Mobcartbag = () => {
			if (localStorage.getItem('usertoken') == null) {
				return (
					<Link to="/Login">
						<Button>
							<img src={require('../statics/header/bag_icon.svg')} />
						</Button>
					</Link>
				);
			} else {
				return (
					<Link to="/Cart">
						<Button>
							<img src={require('../statics/header/bag_icon.svg')} />
						</Button>
					</Link>
				);
			}
		};
		const Userprofileroutes = () => {
			if (this.state.islogged) {
				return (
					<Container>
						<Link className={classes.link} onClick={this.handleToggle} to="/Profile/info">
							My Account
						</Link>
						<br />
						<Link className={classes.link} onClick={this.handleToggle} to="/Profile/orders">
							My Orders
						</Link>
					</Container>
				);
			} else {
				return <> </>;
			}
		};

		const Mobuserlog = () => {
			if (localStorage.getItem('usertoken') == null) {
				return (
					<Container>
						<Link className={classes.link} to="login">
							<Button className={classes.logindrawer}>
								<Typography style={{ color: 'white' }}> Login </Typography>
							</Button>
						</Link>
						<Link className={classes.link} to="Signup">
							<Button className={classes.signupdrawer}>signup</Button>
						</Link>
					</Container>
				);
			} else {
				return (
					<Container className={classes.drawerprofile}>
						<Link className={classes.profilelink} to={`/Profile`}>
							<Button onClick={this.handleToggle}>
								<img src={require('../statics/header/profilepicmob.svg')} />
							</Button>
						</Link>
=======
    const popoveropen = Boolean(this.state.anchorEl);
    const id = popoveropen ? "simple-popover" : undefined;

    const Userlog = () => {
      if (!this.state.islogged) {
        return (
          <Box className={classes.loginsignup}>
            <Button>
              <Link className={classes.loginbuton} to="/Login">
                Login
              </Link>
            </Button>
            <Button>
              <Link className={classes.signupboton} to="/Signup">
                Signup
              </Link>
            </Button>
            <Link to="/Signup">
              <Button>
                <img src={require("../statics/header/bag_icon.svg")} />
              </Button>
            </Link>
          </Box>
        );
      } else {
        return (
          <Box className={classes.loginsignup}>
            <Button onClick={this.handlelogout}>Logout</Button>
            <Link className={classes.profilelink} to={`/Profile/info`}>
              <Button>
                <img
                  src={require("../statics/header/header_profile_icon.svg")}
                />
              </Button>
            </Link>
            <Link to="/Cart">
              <Button>
                <img src={require("../statics/header/bag_icon.svg")} />
              </Button>
            </Link>
          </Box>
        );
      }
    };

    const Mobcartbag = () => {
      if (localStorage.getItem("usertoken") == null) {
        return (
          <Link to="/Login">
            <Button>
              <img src={require("../statics/header/bag_icon.svg")} />
            </Button>
          </Link>
        );
      } else {
        return (
          <Link to="/Cart">
            <Button>
              <img src={require("../statics/header/bag_icon.svg")} />
            </Button>
          </Link>
        );
      }
    };
    const Userprofileroutes = () => {
      if (this.state.islogged) {
        return (
          <Container>
            <Link
              className={classes.link}
              onClick={this.handleToggle}
              to="/Profile/info"
            >
              My Account
            </Link>
            <br />
            <Link
              className={classes.link}
              onClick={this.handleToggle}
              to="/Profile/orders"
            >
              My Orders
            </Link>
          </Container>
        );
      } else {
        return <> </>;
      }
    };

    const Mobuserlog = () => {
      if (localStorage.getItem("usertoken") == null) {
        return (
          <Container>
            <Link className={classes.link} to="login">
              <Button className={classes.logindrawer}>
                <Typography style={{ color: "white" }}> Login </Typography>
              </Button>
            </Link>
            <Link className={classes.link} to="Signup">
              <Button className={classes.signupdrawer}>signup</Button>
            </Link>
          </Container>
        );
      } else {
        return (
          <Container className={classes.drawerprofile}>
            <Link className={classes.profilelink} to={`/Profile`}>
              <Button onClick={this.handleToggle}>
                <img src={require("../statics/header/profilepicmob.svg")} />
              </Button>
            </Link>
>>>>>>> 516f2cdec25b6f75ab8b5f7bd29f6dea5d8af755

						<Button onClick={this.handlelogout}>
							<Typography className={classes.logoutname}>Logout</Typography>
						</Button>
					</Container>
				);
			}
		};

<<<<<<< HEAD
		return (
			<AppBar elevation={0} className={classes.header}>
				{/* mobile toolbar below */}
				<Hidden mdUp>
					<Toolbar className={classes.mobtoolbar}>
						<Button onClick={this.handleToggle}>
							{/* <Typography variant="h6">hello</Typography> */}
							<MenuIcon style={{ color: 'white' }} fontSize="large" />
						</Button>
						<Link to="/">
							<img className={classes.logo} src={require('../logos/Unique fit name.svg')} />
						</Link>
						<Mobcartbag />
					</Toolbar>
				</Hidden>
				{/* mobile toolbar above */}

				{/* drawer setion here start */}
				<Drawer className={classes.drawer} open={this.state.open} onBackdropClick={this.handleDrawerClose}>
					<Paper elevation={0} square className={classes.drawerpaper}>
						<Box className={classes.drawerheader}>
							<div className={classes.closebox}>
								<Button onClick={this.handleToggle} style={{ float: 'right' }}>
									<CloseIcon fontSize="large" color="green" className={classes.closebuton} />
								</Button>
							</div>
							<Mobuserlog />
						</Box>
						<Container className={classes.drawercont}>
							<nav style={{ position: 'relative' }}>
								<ul className={classes.ulmob}>
									<Link className={classes.limob} to="/Home" onClick={this.handleToggle}>
										Home
									</Link>

									<Link className={classes.limob} to="/Shop" onClick={this.handleToggle}>
										Shop Products
									</Link>

									<Link className={classes.limob} onClick={this.handleToggle} to="/Aboutus">
										About us
									</Link>
									<Link className={classes.limob} onClick={this.handleToggle} to="/Contact">
										Contact
									</Link>

									<Link className={classes.uploadshirt} onClick={this.handleToggle} to="/Contact">
										Shirt On Mind ?
									</Link>
								</ul>
								<Box>{/* <Userlog /> */}</Box>
							</nav>
						</Container>
						<Userprofileroutes />
					</Paper>
				</Drawer>
				{/* drawer setion here end */}

				<Hidden smDown>
					<Toolbar className={classes.toolbar}>
						<Link to="/">
							<img className={classes.logo} src={uniquefit_monogramblack} />
						</Link>
						<Box className={classes.navprofile}>
							<nav className={classes.nav}>
								<ul className={classes.ul}>
									<li className={classes.li}>
										<Link className={classes.li} to="/Shop">
											Shirts
										</Link>
									</li>
									<li className={classes.li}>
										<Link
											onMouseEnter={this.handlecomingsoon}
											onMouseLeave={this.handlecomingsoonchange}
											className={classes.comingsoon}
											to="/">
											{/* T shirts  */}
											{this.state.tshirtcomingsoon}
											{/* <Typography className={classes.comingsoon} variant="caption">
												coming soon *
											</Typography> */}
										</Link>
									</li>
									<li className={classes.li}>
										<Link className={classes.li} to="/Aboutus">
											About Us
										</Link>
									</li>
									<li className={classes.li}>
										<Link className={classes.li} to="/Contact">
											Contact
										</Link>
									</li>
									<li className={classes.li}>
										<Link className={classes.uploadshirt} to="/Contact">
											Shirt On Mind ?
										</Link>
									</li>
								</ul>
							</nav>
							<Box></Box>
						</Box>
						<Box className={classes.profilecart}>
							<Hidden smDown>
								<Userlog />
							</Hidden>
						</Box>
					</Toolbar>
				</Hidden>
			</AppBar>
		);
	}
=======
    return (
      <AppBar elevation={0} className={classes.header}>
        {/* mobile toolbar below */}
        <Hidden mdUp>
          <Toolbar className={classes.mobtoolbar}>
            <Button onClick={this.handleToggle}>
              {/* <Typography variant="h6">hello</Typography> */}
              <MenuIcon style={{ color: "white" }} fontSize="large" />
            </Button>
            <Link to="/">
              <img
                className={classes.logo}
                src={require("../logos/Unique fit name.svg")}
              />
            </Link>
            <Mobcartbag />
          </Toolbar>
        </Hidden>
        {/* mobile toolbar above */}

        {/* drawer setion here start */}
        <Drawer
          className={classes.drawer}
          open={this.state.open}
          onBackdropClick={this.handleDrawerClose}
        >
          <Paper elevation={0} square className={classes.drawerpaper}>
            <Box className={classes.drawerheader}>
              <div className={classes.closebox}>
                <Button onClick={this.handleToggle} style={{ float: "right" }}>
                  <CloseIcon
                    fontSize="large"
                    color="green"
                    className={classes.closebuton}
                  />
                </Button>
              </div>
              <Mobuserlog />
            </Box>
            <Container className={classes.drawercont}>
              <nav style={{ position: "relative" }}>
                <ul className={classes.ulmob}>
                  <Link
                    className={classes.limob}
                    to="/Home"
                    onClick={this.handleToggle}
                  >
                    Home
                  </Link>

                  <Link
                    className={classes.limob}
                    to="/Shop"
                    onClick={this.handleToggle}
                  >
                    Shop Products
                  </Link>

                  <Link
                    className={classes.limob}
                    onClick={this.handleToggle}
                    to="/Aboutus"
                  >
                    About us
                  </Link>
                  <Link
                    className={classes.limob}
                    onClick={this.handleToggle}
                    to="/Contact"
                  >
                    Contact
                  </Link>

                  <Link
                    className={classes.uploadshirt}
                    onClick={this.handleToggle}
                    to="/Contact"
                  >
                    Shirt On Mind ?
                  </Link>
                </ul>
                <Box>{/* <Userlog /> */}</Box>
              </nav>
            </Container>
            <Userprofileroutes />
          </Paper>
        </Drawer>
        {/* drawer setion here end */}

        <Hidden smDown>
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <img className={classes.logo} src={uniquefit_monogramblack} />
            </Link>
            <Box className={classes.navprofile}>
              <nav className={classes.nav}>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <Link className={classes.li} to="/Shop">
                      Shirts
                    </Link>
                  </li>
                  <li className={classes.li}>
                    <Link
                      onMouseEnter={this.handlecomingsoon}
                      onMouseLeave={this.handlecomingsoonchange}
                      className={classes.comingsoon}
                      to="/"
                    >
                      {/* T shirts  */}
                      {this.state.tshirtcomingsoon}
                      {/* <Typography className={classes.comingsoon} variant="caption">
												coming soon *
											</Typography> */}
                    </Link>
                  </li>
                  <li className={classes.li}>
                    <Link className={classes.li} to="/Aboutus">
                      About Us
                    </Link>
                  </li>
                  <li className={classes.li}>
                    <Link className={classes.li} to="/Contact">
                      Contact
                    </Link>
                  </li>
                  <li className={classes.li}>
                    <Link className={classes.uploadshirt} to="/Contact">
                      Shirt On Mind ?
                    </Link>
                  </li>
                </ul>
              </nav>
              <Box></Box>
            </Box>
            <Box className={classes.profilecart}>
              <Hidden smDown>
                <Userlog />
              </Hidden>
            </Box>
          </Toolbar>
        </Hidden>
      </AppBar>
    );
  }
>>>>>>> 516f2cdec25b6f75ab8b5f7bd29f6dea5d8af755
}

export default withStyles(styles)(Header);

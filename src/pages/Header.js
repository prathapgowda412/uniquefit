import React, { Component, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Uniquefit_blacklogosvg from '../logos/Uniquefit logo.svg';
import uniquefit_monogramblack from '../logos/Unique fit monogram.svg';
import profileavat from './Home/components/statics/images/avatr1.jpg';
import shopingcart from '../statics/icons/shopping-cart.svg';

import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/styles';
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
} from '@material-ui/core';
import '../custom.css';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Aboutsection from './aboutsection';
import { Link, NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';
import { styled } from '@material-ui/core/styles';
import breakpoint from 'styled-components-breakpoint';
import users from '../data/users.json';
import { width } from '@material-ui/system';
import { UserContext } from '../auth';
import CloseIcon from '@material-ui/icons/Close';
import axio from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';
import Axios from 'axios';
import { green } from '@material-ui/core/colors';
import { ImageSearchRounded } from '@material-ui/icons';

const styles = (theme) => ({
	drawerBox: {
		width: '400px',
	},
	header: {
		backgroundColor: 'white',
		position: 'sticky',
		height: '80px',
		elevation: '1',
		textDecoration: 'none',
		color: 'black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		boxShadow: '0 5px 8px -8px rgba(17, 17, 17, 0.329)',
		// box-shadow: '0 5px 10px #111',
	},
	linkactive: {
		color: '#387A76',
	},
	toolbar: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	mobtoolbar: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'space-between',
	},
	button: {
		color: 'black',
		fontWeight: '600',
	},
	logo: {
		height: '35px',
	},
	ul: {
		listStyleType: 'none',
		margin: 'auto',

		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		// listStyle: 'inline',
	},
	ulmob: {
		listStyleType: 'none',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
	},
	limob: {
		margin: '10px 0px',
		textDecoration: 'none',
		color: 'black',
		'&:hover': {
			color: '#034b46',
			cursor: 'pointer',
		},

		// marginTop: '10px',
	},
	li: {
		backgroundColor: 'white',
		width: 'fit-content',
		fontWeight: 500,
		color: 'black',
		fontSize: '16px',
		margin: '5px 10px',
		transition: '0.2s',
		textTransform: 'uppercase',
		textDecoration: 'none',

		'&:hover': {
			color: '#034b46',
			cursor: 'pointer',
		},
	},
	uploadshirt: {
		textDecoration: 'none',
		color: '#EE5F73',
	},
	activecls: {
		color: '#034b46',
		fontSize: '16px',
		transition: '0.3s',
		borderBottom: '2px solid #034b46',
	},

	nav: {
		display: 'flex',
		width: 'auto',
		flexDirection: 'row',
		width: 'fit-content',
		justifyContent: 'space-between',
	},

	sideBarIcon: {
		padding: 0,
		color: 'white',
		cursor: 'pointer',
	},

	profilepic: {
		height: '25px',
		width: '25px',
		marginRight: '10px',
	},
	profilelink: {
		display: 'flex',
		flexDirection: 'row',
		color: 'black',
		alignItems: 'center',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
			color: '#387A76',
			cursor: 'pointer',
		},
	},
	drawerprofile: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	drawer: {
		width: '400px',
	},
	requestcallbutton: {
		color: 'white',
		backgroundColor: '#387A76',
		fontSize: '14px',
		height: '38px',
		width: '180px',
		marginLeft: '20px',
		borderRadius: '20px',
		'&:hover': {
			backgroundColor: '#034b46',
		},
	},
	shopingcart: {
		marginLeft: '10px',
	},
	profilecart: {
		width: 'fit-content',
		display: 'flex',
		flexDirection: 'row',
		marginLeft: '50px',
	},
	closebox: {
		width: '100%',
		height: '50px',
		position: 'relative',
	},
	drawercont: {
		height: 'fit-content',
		position: 'relative',
		padding: '10px 0 10px 0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginbutton: {
		// backgroundColor: 'white',
		backgroundColor: '#387A76',
		height: '38px',
		color: 'white',
		// color: '#387A76',
		width: '148px',
		display: 'flex',
		borderRadius: '5px',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px #0000006b',
		boxShadow: '0px 5px 5px -5px #0000006b',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: '#034b46',
			textDecoration: 'none',
			color: 'white',
		},
	},
	loginsignup: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	navprofile: {
		display: 'flex',
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-between',
	},
	closebuton: {
		// color: white,
		// backgroundColor: 'white',
	},
	drawerpaper: {
		width: '290px',
		position: 'relative',
	},
	logoutname: {
		color: 'white',
		fontSize: '16px',
	},
	popover: {
		// pointerEvents: 'none',
		pointerEvents: 'none',
		cursor: 'pointer',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	comingsoon: {
		color: 'black',
		textDecoration: 'none',
		transition: 'all 1.3s',
	},
	popoverbox: {
		padding: '2px',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	menuicon: {
		fontSize: '24px',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
		transition: 'all 0.1s',
		'&:hover': {
			color: '#034b46',
		},
	},
	drawer: {
		transition: '1s',
	},
	requestbuton: {
		color: 'white',
		fontWeight: '600',
	},
	carticon: {
		fontSize: '22px',
	},
	signupboton: {
		backgroundColor: '#034b46',
		textDecoration: 'none',
		color: 'white',
		borderRadius: '5px',
		padding: '7px 12px',
	},
	loginbuton: {
		textDecoration: 'none',
	},
	drawerheader: {
		minHeight: '120px',
		maxHeight: 'fit-content',
		width: '100%',
		backgroundColor: '#387A76',
		paddingBottom: '5px',
	},
	logindrawer: {
		padding: '7px 12px',
		color: 'white',
	},
	signupdrawer: {
		backgroundColor: 'white',
		borderRadius: '5px',
		color: 'black',
	},
});

// use popper for drop down

class Header extends Component {
	constructor() {
		super();

		this.state = {
			open: false,
			anchorEl: null,
			username: '',
			logged: 'yes',
			tshirtcomingsoon: 'Tshirts',
			usertoken: `${localStorage.getItem(`usertoken`)}`,
		};
	}

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
	// componentDidMount() {
	// 	const config = {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			token: `${this.state.usertoken}`,
	// 		},
	// 	};
	// 	// axio.get('http://localhost:5000/user/me', config)
	// 	// 	.then((resp) => {
	// 	// 		// console.log('response below');
	// 	// 		// console.log(resp);
	// 	// 		// console.log(resp.data.name);
	// 	// 		this.setState({ username: resp.data.name });
	// 	// 		this.state.username = resp.data.name;
	// 	// 	})
	// 	// 	.catch((err) => {
	// 	// 		console.log(err);
	// 	// 	});
	// 	// console.log('up');
	// }

	//   const open = Boolean(anchorEl);
	// for on hover drop down for profile top

	// coming soon change below

	handlecomingsoon = () => {
		this.setState({ tshirtcomingsoon: 'Coming soon *' });
	};
	handlecomingsoonchange = () => {
		this.setState({ tshirtcomingsoon: 'Tshirts' });
	};
	// coming soon change above

	handlelogout = () => {
		this.setState({ username: '' });
		localStorage.setItem('usertoken', '');
		localStorage.setItem('tokens', '');
		window.location.reload();
	};

	render() {
		const { classes } = this.props;

		// const userlogged = async () => {
		// 	if (localStorage.getItem('usertoken' != '')) {
		// 		const config = {
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				token: `${localStorage.getItem(`usetoken`)}`,
		// 			},
		// 		};
		// 		const user = await Axios.get('http://45.13.132.188:5000/me', config);
		// 		console.log('use:');
		// 		console.log(user);
		// 		this.setState({ logged: 'true' });
		// 		return user;
		// 	} else {
		// 		this.setState({ logged: 'no' });
		// 		return 'false';
		// 	}
		// };

		const popoveropen = Boolean(this.state.anchorEl);
		const id = popoveropen ? 'simple-popover' : undefined;

		const Userlog = () => {
			if (this.state.usertoken == '') {
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
						<Link to="/login">
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
						<Link className={classes.profilelink} to={`/Profile`}>
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
			if (localStorage.getItem('usertoken') == '') {
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

		const Mobuserlog = () => {
			if (localStorage.getItem('usertoken') == '') {
				return (
					<Container>
						<Link className={classes.link} to="login">
							<Button className={classes.logindrawer}>Login</Button>
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

						<Button onClick={this.handlelogout}>
							<Typography className={classes.logoutname}>Logout</Typography>
						</Button>
					</Container>
				);
			}
		};

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
									<Link className={classes.limob} to="/Contact">
										Contact
									</Link>

									<Link className={classes.uploadshirt} to="/Contact">
										Shirt On Mind ?
									</Link>
								</ul>
								<Box>{/* <Userlog /> */}</Box>
							</nav>
						</Container>
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
}

export default withStyles(styles)(Header);

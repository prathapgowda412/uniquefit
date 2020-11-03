import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Uniquefit_blacklogosvg from '../logos/Uniquefit logo.svg';
import profileavat from './Home/components/statics/images/avatr1.jpg';
import shopingcart from '../statics/icons/shopping-cart.svg';

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
} from '@material-ui/core';
import '../custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Aboutsection from './aboutsection';
import { Link, NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';
import { styled } from '@material-ui/core/styles';
import breakpoint from 'styled-components-breakpoint';
import users from '../data/users.json';
import { width } from '@material-ui/system';

const styles = (theme) => ({
	drawerBox: {
		width: '400px',
	},
	header: {
		backgroundColor: 'white',
		position: 'sticky',
		height: '70px',
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
	},
	button: {
		color: 'black',
		fontWeight: '600',
	},
	logo: {
		height: '53px',
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
		fontWeight: 700,
		color: 'black',
		margin: '5px 10px',
		textDecoration: 'none',
		'&:hover': {
			color: '#034b46',
			cursor: 'pointer',
		},
	},
	nav: {
		display: 'flex',
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

	navprofile: {
		display: 'flex',
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-between',
	},

	drawerpaper: {
		width: '250px',
		position: 'relative',
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
	carticon: {
		fontSize: '22px',
	},
});
// use popper for drop down
class Header extends Component {
	constructor() {
		super();
		this.state = { open: false };
	}
	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	handleToggle = () => this.setState({ open: !this.state.open });
	render() {
		const userid = 1;
		const user = users.filter((user, index) => {
			return user.id == userid;
		});
		console.log(user);
		console.log(
			user.map((user) => {
				return user.name;
			})
		);

		const { classes } = this.props;

		return (
			<Grid item Container>
				<AppBar user={user} elevation={0} className={classes.header}>
					<Toolbar className={classes.toolbar}>
						<Hidden mdUp>
							<Button onClick={this.handleToggle}>
								{/* <Typography variant="h6">hello</Typography> */}
								<FontAwesomeIcon
									Component="button"
									icon={faBars}
									className={classes.menuicon}
									style={{ fontSize: '28px' }}
								/>
							</Button>
						</Hidden>

						{/* drawer setion here start */}
						<Drawer
							className={classes.drawer}
							open={this.state.open}
							onBackdropClick={this.handleDrawerClose}>
							<Paper elevation={0} square className={classes.drawerpaper}>
								<div className={classes.closebox}>
									<Button onClick={this.handleToggle} style={{ float: 'right' }}>
										<FontAwesomeIcon icon={faTimes} style={{ fontSize: '28px' }}>
											menu
										</FontAwesomeIcon>
									</Button>
								</div>
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
										</ul>
										<Container
											style={{
												backgroundColor: '#f2f2f2',
												padding: '10px 5px',
												marginTop: '10px',
												marginBottom: '10px',
												borderRadius: '10px',
											}}>
											<Link
												className={classes.profilelink}
												to="/Profile"
												onClick={this.handleToggle}>
												<Avatar className={classes.profilepic} src={profileavat} />
												<Typography>My Profile </Typography>
											</Link>
											<Button>V</Button>
										</Container>
										<Button className={classes.requestcallbutton}>request</Button>
									</nav>
								</Container>
							</Paper>
						</Drawer>
						{/* drawer setion here end */}

						<Link to="/">
							<img className={classes.logo} src={Uniquefit_blacklogosvg} />
						</Link>
						<Hidden smDown>
							<Box className={classes.navprofile}>
								<nav className={classes.nav}>
									<ul className={classes.ul}>
										<li className={classes.li}>
											<Link className={classes.li} to="/Home">
												Home
											</Link>
										</li>
										<li className={classes.li}>
											<Link className={classes.li} to="/Shop">
												Shop Products
											</Link>
										</li>
										<li className={classes.li}>
											<Link className={classes.li} to="/Aboutus">
												About Us
											</Link>
										</li>
									</ul>
									<Button className={classes.requestcallbutton}>Request Call Back</Button>
								</nav>
								<Link to="/Login">Login</Link>
								<Link className={classes.profilelink} to="/Profile">
									<Avatar className={classes.profilepic} src={profileavat} />
									<Typography>My Profile </Typography>
								</Link>
							</Box>
						</Hidden>
						<Box className={classes.profilecart}>
							<Link className={classes.link} to="/Cart">
								<FontAwesomeIcon className={classes.carticon} icon={faShoppingCart} />
							</Link>
						</Box>
					</Toolbar>
				</AppBar>
			</Grid>
		);
	}
}

export default withStyles(styles)(Header);

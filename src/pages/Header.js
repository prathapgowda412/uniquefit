import React, { Component, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Uniquefit_blacklogosvg from '../logos/Uniquefit logo.svg';
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

import axio from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';
import Axios from 'axios';

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
		fontSize: '16px',
		margin: '5px 10px',
		transistion: '0.2s',
		textDecoration: 'none',

		'&:hover': {
			color: '#034b46',
			cursor: 'pointer',
		},
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
	popover: {
		// pointerEvents: 'none',
		pointerEvents: 'none',
		cursor: 'pointer',
		'&:hover': {
			cursor: 'pointer',
		},
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
			usertoken: `${localStorage.getItem(`usertoken`)}`,
			anchorEl: null,
			popopen: false,
		};
	}

	// for popdown below
	handleClickPopDown = (event) => {
		if (this.state.anchorEl !== event.currentTarget) {
			this.setState({ anchorEl: event.currentTarget });
		}
		// this.setState({ anchorEl: true });
	};

	handleClosePopDown = () => {
		this.setState({ anchorEl: null });
	};

	// for popdown hover above

	// const uservalue = useContext(UserContext);
	handleDrawerClose = () => {
		this.setState({ open: false });
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

	handleToggle = () => this.setState({ open: !this.state.open });

	// for on hover drop down for profile down

	//   const open = Boolean(anchorEl);
	// for on hover drop down for profile top

	handlelogout = () => {
		this.setState({ username: '' });
		localStorage.setItem('usertoken', '');
		window.location.reload();
	};

	render() {
		const { classes } = this.props;

		const userlogged = async () => {
			if (localStorage.getItem('usertoken' != '')) {
				const config = {
					headers: {
						'Content-Type': 'application/json',
						token: `${localStorage.getItem(`usetoken`)}`,
					},
				};
				const user = await Axios.get('http://45.13.132.188:5000/me', config);
				console.log('use:');
				console.log(user);
				this.setState({ logged: 'true' });
				return user;
			} else {
				this.setState({ logged: 'no' });
				return 'false';
			}
		};
		console.log('user :');
		console.log(userlogged);
		console.log('logged or not :');

		console.log(this.state.logged);

		const Userlog = () => {
			if (this.state.usertoken == '') {
				return (
					<Button>
						<Link to="/Login">Login</Link>
					</Button>
				);
			} else {
				return (
					<>
						{/* <Typography
							aria-owns={popopen ? 'mouse-over-popover' : undefined}
							aria-haspopup="true"
							onMouseEnter={this.handlePopoverOpen}
							onMouseLeave={this.handlePopoverClose}>
							Hover with a Popover.
						</Typography>
						<Popover
							id="mouse-over-popover"
							className={classes.popover}
							classes={{
								paper: classes.paper,
							}}
							popopen={popopen}
							anchorEl={this.anchorEl}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							onClose={this.handlePopoverClose}
							disableRestoreFocus>
							<Typography>I use Popover.</Typography>
						</Popover>{' '} */}
						<Box>
							<Button onClick={this.handlelogout}>Logout</Button>
							<NavLink
								activeClassName={classes.activecls}
								className={classes.profilelink}
								to={`/Profile/1`}>
								<Avatar className={classes.profilepic} src={profileavat} />
								<Typography>Welcome {this.state.username} </Typography>{' '}
								<Link className={classes.link} to="/Cart">
									<FontAwesomeIcon className={classes.carticon} icon={faShoppingCart} />
								</Link>
							</NavLink>
						</Box>
					</>
				);
			}
		};

		return (
			<AppBar elevation={0} className={classes.header}>
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
					<Drawer className={classes.drawer} open={this.state.open} onBackdropClick={this.handleDrawerClose}>
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
									<Box>
										<Userlog />
									</Box>
									{/* <Container
										style={{
											backgroundColor: '#f2f2f2',
											padding: '10px 5px',
											marginTop: '10px',
											marginBottom: '10px',
											borderRadius: '10px',
										}}>
										<Link className={classes.profilelink} to="/Profile" onClick={this.handleToggle}>
											<Avatar className={classes.profilepic} src={profileavat} />
											<Typography>My Profile </Typography>
										</Link>
										<Button>V</Button>
									</Container> */}
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
										<NavLink activeClassName={classes.activecls} className={classes.li} to="/Home">
											Home
										</NavLink>
									</li>
									<li className={classes.li}>
										<NavLink activeClassName={classes.activecls} className={classes.li} to="/Shop">
											Shop Products
										</NavLink>
									</li>
									<li className={classes.li}>
										<NavLink
											activeClassName={classes.activecls}
											className={classes.li}
											to="/Aboutus">
											About Us
										</NavLink>
									</li>
								</ul>
								<Button className={classes.requestcallbutton}>
									<Typography variant="button" className={classes.requestbuton}>
										Request Call Back
									</Typography>
								</Button>
							</nav>
							<Box>
								<Userlog />
								<div>
									<Button
										aria-owns={this.anchorEl ? 'simple-menu' : undefined}
										aria-haspopup="true"
										onClick={this.handleClickPopDown}
										onMouseOver={this.handleClickPopDown}>
										{/* <Avatar /> */}
										Profile
									</Button>
									<Menu
										anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
										transformOrigin={{ vertical: 'top', horizontal: 'left' }}
										id="simple-menu"
										anchorEl={this.state.anchorEl}
										open={Boolean(this.state.anchorEl)}
										onClose={this.handleClosePopDown}
										MenuListProps={{ onMouseLeave: this.handleClosePopDown }}
										getContentAnchorEl={null}>
										hwlo
										{/* <MenuItem onClick={this.handleClosePopDown}>Profile</MenuItem>
										<MenuItem onClick={this.handleClosePopDown}>My account</MenuItem>
										<MenuItem onClick={this.handleClosePopDown}>Logout</MenuItem> */}
									</Menu>
								</div>
							</Box>

							{/* <Loguser /> */}
							{/* { 
									if (this.state.username == ' ') {
										return (
											<>
												<Button>
													<Link to="/Login">Login</Link>
												</Button>
											</>
										);
									} else {
										return (
											<>
												<NavLink
													activeClassName={classes.activecls}
													className={classes.profilelink}
													to="/Profile">
													<Avatar className={classes.profilepic} src={profileavat} />
													<Typography>Welcome {this.state.username} </Typography>
												</NavLink>
											</>
										);
									}
								} */}
							{/* <Link to="/Login">Login</Link>
							<Box>
								<Button
									onClick={() => {
										localStorage.setItem('usertoken', '');
									}}>
									logout
								</Button>
							</Box>

							<NavLink activeClassName={classes.activecls} className={classes.profilelink} to="/Profile">
								<Avatar className={classes.profilepic} src={profileavat} />
								<Typography>Welcome {this.state.username} </Typography>
							</NavLink> */}
						</Box>
					</Hidden>
					<Box className={classes.profilecart}>
						{/* <Link className={classes.link} to="/Cart">
							<FontAwesomeIcon className={classes.carticon} icon={faShoppingCart} />
						</Link> */}
					</Box>
				</Toolbar>
			</AppBar>
		);
		// function Loguser() {
		// 	if (localStorage.getItem('usertoken') == '') {
		// 		return (
		// 			<>
		// 				<Button>
		// 					<Link to="/Login">Login</Link>
		// 				</Button>
		// 			</>
		// 		);
		// 	} else {
		// 		return (
		// 			<>
		// 				<NavLink activeClassName={classes.activecls} className={classes.profilelink} to="/Profile">
		// 					<Avatar className={classes.profilepic} src={profileavat} />
		// 					<Typography>Welcome {this.state.username} </Typography>
		// 				</NavLink>
		// 			</>
		// 		);
		// 	}
		// }
	}
}

export default withStyles(styles)(Header);

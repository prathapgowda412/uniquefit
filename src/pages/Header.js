import React from 'react';
import Button from '@material-ui/core/Button';
// import Uniquefit_blacklogo from '../statics/logos-images/uiquefit-logo-black.png';
import Uniquefit_blacklogosvg from '../logos/Uniquefit logo.svg';
// import profileavat from '../statics/images/avatars/avatr1.jpg';
import profileavat from './Home/components/statics/images/avatr1.jpg';
// import shopingcart from '../statics/icons/shopping-cart.svg';
import shopingcart from '../statics/icons/shopping-cart.svg';

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
	IconButton,
} from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import Aboutsection from './aboutsection';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: 'white',
		position: 'sticky',
		height: '70px',
		elevation: '1',
		color: 'black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		boxShadow: '0 5px 10px -8px rgba(17, 17, 17, 0.329)',
		// box-shadow: '0 5px 10px #111',
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
		marginLeft: '40px',
	},
	ul: {
		listStyleType: 'none',
		margin: 'auto',

		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		// listStyle: 'inline',
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
		width: '60%',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},

	sideBarIcon: {
		padding: 0,
		color: 'white',
		cursor: 'pointer',
	},
	barsicon: {
		fontSize: '29px',
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			height: '35vh',
			display: 'block',
		},
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
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
			color: '#387A76',
			cursor: 'pointer',
		},
	},
	requestcallbutton: {
		color: 'white',
		backgroundColor: '#387A76',
		fontSize: '14px',
		height: '38px',
		width: '180px',
		borderRadius: '22px',
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
	loginbutton: {
		backgroundColor: '#387A76',
		height: '38px',
		width: '148px',
		textDecoration: 'none',
		color: 'white',
		'&:hover': {
			backgroundColor: '#034b46',
			textDecoration: 'none',
		},
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<AppBar elevation="0" className={classes.header}>
			{/* <MenuIcon>helo</MenuIcon> */}
			{/* <MenuIcon className={classes.sideBarIcon} /> */}
			<Toolbar className={classes.toolbar}>
				{/* <Icon style={{ width: 'fit-content', backgroundColor: 'red' }}>hlo</Icon> */}
				{/* <FontAwesomeIcon icon={faBars} className={classes.barsicon} /> */}
				<img className={classes.logo} src={Uniquefit_blacklogosvg} />
				<nav className={classes.nav}>
					<ul className={classes.ul}>
						<li className={classes.li}>
							<Link className={classes.li} to="/Home">
								Home
							</Link>
						</li>
						<li className={classes.li}>Shop Products</li>
						<li className={classes.li}>
							<Link className={classes.li} to="/shop">
								Shop Collection
							</Link>
						</li>
						{/* <li className={classes.li}>Offers</li> */}
						<li className={classes.li}>
							<Link className={classes.li} to="/About">
								About Us
							</Link>
						</li>
					</ul>
					<Button className={classes.requestcallbutton}>Request Call Back</Button>
				</nav>
				<Box className={classes.profilecart}>
					<Link className={classes.profilelink}>
						<Avatar className={classes.profilepic} src={profileavat} />
						<Typography>My Profile</Typography>
					</Link>

					{/* <Button className={classes.loginbutton}>Login</Button> */}

					<img className={classes.shopingcart} src={shopingcart} />
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;

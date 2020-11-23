import React, { useState } from 'react';
import {
	makeStyles,
	Grid,
	Hidden,
	AppBar,
	Container,
	CssBaseline,
	Box,
	Typography,
	Button,
	Avatar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import { Link } from 'react-router-dom';
import Group from './images/Group.svg';

import axio from 'axios';

// not used

import Uniquefit_blacklogosvg from '../../logos/Uniquefit logo.svg';
import Login from './Login';
import { Toys } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
	root: {
		height: '85vh',
		maxWidth: '100%',
	},
	appbar: {
		backgroundColor: 'white',
		paddingLeft: '5%',
	},
	lineText: {
		width: '100%',
		textAlign: 'center',
		borderBottom: '0.2px solid #d2d2d2',
		lineHeight: '0.1em',
		margin: '10px 0 20px',
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '0.75rem',
		color: '#606060',
	},

	inLineText: {
		background: '#fff',
		padding: '0 10px',
	},

	loginHeading: {
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '2.5rem',
		backgroundColor: 'white',
		lineHeight: '36px',
		color: 'black',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
	},
	link: {
		textDecoration: 'none',
		color: '#387A76',
	},
	googleLoginButton: {
		background: '#FFFFFF',
		border: '1px solid #ECECEC',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
		borderRadius: '5px',
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '14px',
		lineHeight: '18px',
		textAlign: 'center',
		textTransform: 'capitalize',
		padding: '1rem 0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			lineHeight: '16px',
		},
		'&:hover': {
			backgroundColor: '#fefefe',
			boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
		},
	},
	loginButton: {
		background: '#114A82',
		borderRadius: '5px',
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '1.15rem',
		lineHeight: '18px',
		textAlign: 'center',
		padding: '1rem 0',
		textTransform: 'capitalize',
		'&:hover': {
			background: '#1f4f8f',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '14px',
			lineHeight: '16px',
		},
	},
	logo: {
		height: '53px',
	},
	errorname: {
		color: 'red',
		fontSize: '14px',
	},
	response: {
		color: 'green',
	},
	textField: {
		background: '#E5E5E5',
		borderRadius: '5px',
	},
	labelFont: {
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '1rem',
		lineHeight: '18px',
	},
	iconSize: {
		width: '1.25rem',
		height: '1.25rem',
		marginRight: '10px',
	},
}));
function Register() {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	});

	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [mobile, setMobile] = React.useState('');

	const handleEmail = (event) => {
		setEmail(event.target.value);
		seterrorname('');
		// console.log(email);
	};
	const handleName = (event) => {
		setName(event.target.value);
		// console.log(name);
	};
	const handleMobile = (event) => {
		setMobile(event.target.value);
		// console.log(email);
	};

	const [password, setPassword] = React.useState('');

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
		setPassword(event.target.value);
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	let [errorname, seterrorname] = React.useState();
	let [response, setresponse] = React.useState();
	const OnloginClick = (event) => {
		// console.log(`Name: ${name}`);
		// console.log(`mobile: ${mobile}`);
		// console.log(`email: ${email}`);
		// console.log(`password: ${password}`);

		const formdata = {
			username: `${name}`,
			email: `${email}`,
			mobile: `${mobile}`,
			password: `${password}`,
		};

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		axio.post('https://uniquefit.ml/users/register', JSON.stringify(formdata), config)
			.then((resp) => {
				console.log(resp);
				setresponse('user registered successfully');
			})
			.catch((err) => {
				seterrorname(err.response.data.msg);
			});
	};

	return (
		<Grid item container className={classes.root} xs={12}>
			<AppBar className={classes.appbar} position="sticky" elevation="0">
				<Link to="/">
					<img className={classes.logo} src={Uniquefit_blacklogosvg} />
				</Link>
			</AppBar>
			{/* <Grid container> */}
			<Grid item container sm={12} md={6} direction="column">
				<Container maxWidth="sm">
					{/* <Box component="div"> */}
					{/* <Box component="div"> */}
					{/* <Box my={4}>
									<Typography align="center" color="initial" className={classes.loginHeading}>
										Login
									</Typography>
								</Box> */}
					{/* <Button
									variant="contained"
									className={classes.googleLoginButton}
									fullWidth
									size="large">
									<Avatar
										className={classes.iconSize}
										src={'https://www.flaticon.com/svg/static/icons/svg/300/300221.svg'}
									/>
									Login with Google
								</Button> */}
					<Box my={5}>
						<Typography component="div" align="center" color="initial">
							<Box component="div" className={classes.lineText}>
								<Box component="span" className={classes.loginHeading}>
									Sign Up
								</Box>
							</Box>
						</Typography>
					</Box>
					<form noValidate autoComplete="off">
						<label className={classes.labelFont}>Name</label>
						<TextField
							id="name"
							size="medium"
							required
							// placeholder="Email"
							margin="normal"
							fullWidth
							onChange={handleName}
							variant="outlined"
							className={classes.textField}></TextField>

						<label className={classes.labelFont}>Email</label>
						<TextField
							id="email"
							size="medium"
							required
							// placeholder="Email"
							margin="normal"
							fullWidth
							onChange={handleEmail}
							variant="outlined"
							className={classes.textField}></TextField>
						<Container>
							<Typography variant="caption" className={classes.errorname}>
								{errorname}
							</Typography>
						</Container>
						<label className={classes.labelFont}>Mobile </label>
						<TextField
							id="mobile"
							size="medium"
							required
							// placeholder="Email"
							margin="normal"
							fullWidth
							onChange={handleMobile}
							variant="outlined"
							className={classes.textField}></TextField>

						<Box mt={3}>
							<label className={classes.labelFont}>Password</label>
						</Box>
						<FormControl
							fullWidth
							size="medium"
							margin="normal"
							variant="outlined"
							className={classes.textField}>
							{/* <InputLabel htmlFor="password">Password</InputLabel> */}
							<OutlinedInput
								id="password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								//   placeholder='Password'
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>

						{/* <Typography
							variant="body2"
							align="right"
							color="initial"
							className={classes.labelFont}
							style={{ color: '#555555' }}>
							Forgot Password
						</Typography> */}
						<Box my={4}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								disableElevation
								color="primary"
								onClick={OnloginClick}
								endIcon={<ArrowRightAltSharpIcon />}
								className={classes.loginButton}>
								Login
							</Button>
							<Typography className={classes.response} variant="caption">
								{response}
							</Typography>
						</Box>
					</form>
					<Box my={4}>
						<Typography variant="body1" align="center" color="initial" className={classes.labelFont}>
							Already a member?
							<Link className={classes.link} to="/Login">
								Login
							</Link>
						</Typography>
					</Box>
					{/* </Box> */}
					{/* </Box> */}
				</Container>
			</Grid>

			<Grid item sm={12} md={6} style={{ backgroundImage: `url(${Group})` }}></Grid>
			{/* </Grid> */}
		</Grid>
	);
}

export default Register;

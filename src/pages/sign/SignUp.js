import React, { useState } from 'react';
import { makeStyles, Grid, Hidden, Container, CssBaseline, Box, Typography, Button, Avatar } from '@material-ui/core';
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

const useStyles = makeStyles((theme) => ({
	root: {
		height: 'fit-content',

		maxWidth: '100%',
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
		color: 'black',
		fontSize: '2.5rem',
		lineHeight: '36px',
		backgroundColor: 'white',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
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
	link: {
		color: '#387A76',
		textDecoration: 'none',
	},
	iconSize: {
		width: '1.25rem',
		height: '1.25rem',
		marginRight: '10px',
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		password: '',
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item sm={12} md={6} container direction="column">
					<Container maxWidth="sm">
						{/* <Box component="div" style={{ margin: '3.25rem 0.25rem' }}>
							<Box component="div"> */}
						{/* <Box my={4}>
									<Typography align="center" color="initial" className={classes.loginHeading}>
										Sign Up
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
									Sign Up with Google
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
							<Box mt={3}>
								<label className={classes.labelFont}>First Name</label>
							</Box>
							<TextField
								id="fName"
								size="medium"
								required
								// placeholder="Email"
								margin="normal"
								fullWidth
								variant="outlined"
								className={classes.textField}></TextField>
							<Box mt={3}>
								<label className={classes.labelFont}>Last/Sur Name</label>
							</Box>
							<TextField
								id="lName"
								size="medium"
								required
								// placeholder="Email"
								margin="normal"
								fullWidth
								variant="outlined"
								className={classes.textField}></TextField>

							<Box mt={3}>
								<label className={classes.labelFont}>Phone</label>
							</Box>
							<TextField
								size="medium"
								required
								margin="normal"
								fullWidth
								id="phone"
								className={classes.textField}
								InputProps={{
									startAdornment: <InputAdornment position="start">+91</InputAdornment>,
								}}
								variant="outlined"
							/>
							<Box mt={3}>
								<label className={classes.labelFont}>Email</label>
							</Box>
							<TextField
								id="email"
								size="medium"
								required
								// placeholder="Email"
								margin="normal"
								fullWidth
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
							<Box mt={3}>
								<label className={classes.labelFont}>Confirm Password</label>
							</Box>
							<FormControl
								fullWidth
								size="medium"
								margin="normal"
								variant="outlined"
								className={classes.textField}>
								{/* <InputLabel htmlFor="password">Password</InputLabel> */}
								<OutlinedInput
									id="confirm-password"
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
												{values.showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>
							{/* <Typography variant="body2" align="right" color="initial" className={classes.labelFont} style={{color: '#555555'}}>
                    Forgot Password
                  </Typography> */}
							<Box my={4}>
								<Button
									variant="contained"
									fullWidth
									size="large"
									disableElevation
									color="primary"
									endIcon={<ArrowRightAltSharpIcon />}
									className={classes.loginButton}>
									Sign Up
								</Button>
							</Box>
						</form>
						<Box my={4}>
							<Typography variant="body1" align="center" color="initial" className={classes.labelFont}>
								Have an Account?
								<Link to="/Login" className={classes.link}>
									Login
								</Link>
							</Typography>
						</Box>
						{/* </Box> */}
						{/* </Box> */}
					</Container>
				</Grid>
				<Grid item sm={12} md={6} style={{ backgroundImage: `url(${Group})` }}></Grid>
			</Grid>
		</div>
	);
}

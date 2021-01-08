/* eslint-disable jsx-a11y/alt-text */
import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	main: {
		height: '100vh',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	cont: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '5%',
	},
	welcomeAdmin: {
		fontWeight: 'bold',
		fontSize: '24px',
		color: '#2e2e2e',
		marginTop: '60px',
		marginBottom: '20px',
	},
	box: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	inputfie: {
		// border: '5px solid rgba(200,200,200)',
		backgroundColor: '#f4f4f4',
		// border: 'none',

		borderRadius: '10px',
		marginTop: '20px',
		marginBottom: '20px',
	},
	label: {
		fontSize: '18px',
		marginTop: '30px',
		marginBottom: '10px',
	},
	input: {
		color: '#b2b2b2',
		textAlign: 'center',
		borderRadius: '10px',
	},
	loginbuton: {
		height: '48px',
		marginTop: '20px',
		borderRadius: '10px',
		width: '184px',
		backgroundColor: '#387a78',
		boxShadow: '0px 0px 30px  rgba(0,0,0,0.10)',
		'&:hover': {
			backgroundColor: '#28706b',
		},
	},
}));

function AdminLogin() {
	const [isAdminLogged, setisAdminLogged] = React.useState(false);
	useEffect(() => {
		checkIsLogged();
	});
	const checkIsLogged = () => {
		const adminToken = localStorage.getItem('adminToken');
		if (adminToken) {
			console.log(adminToken);
			setisAdminLogged(true);
		} else {
			setisAdminLogged(false);
		}
	};

	const [password, setPassword] = React.useState();
	const [email, setEmail] = React.useState();
	const handlePassword = (event) => {
		setPassword(event.target.value);
		// console.log(password);
	};
	const handleEmail = (event) => {
		setEmail(event.target.value);
		// console.log(email);
	};
	const handleLogin = async (event) => {
		const data = {
			adminEmail: email,
			adminPassword: password,
		};
		const resp = await Axios.post(`${process.env.REACT_APP_API_URL}/admin/adminLogin`, data);
		// const resp = await Axios.post(`http://localhost:5000/admin/adminLogin`, data);
		if (resp.status === 200) {
			const token = resp.data.token;
			// console.log(token);
			setisAdminLogged(true);
			localStorage.setItem('adminToken', token);
		}
		// console.log(resp);
	};
	// console.log(localStorage.getItem('adminToken'));
	// console.log(isAdminLogged);
	const classes = useStyles();
	if (isAdminLogged) {
		return (
			<Grid container className={classes.main}>
				<Grid item xs={4} className={classes.cont}>
					<img height="75px" src={require('../../logos/Uniquefit logo.svg')} />
					<Container className={classes.box}>
						<Typography className={classes.welcomeAdmin}>welcome Admin</Typography>
						<Container>
							<Grid xs={12}>
								<Grid xs={12}>
									<TextField
										className={classes.inputfie}
										fullWidth
										onChange={handleEmail}
										label="Email"
										placeholder="enter email"
										variant="outlined"
										inputProps={{ className: classes.input }}
									/>
								</Grid>
							</Grid>
							<Grid xs={12}>
								<Grid xs={12}>
									<TextField
										inputProps={{ className: classes.input }}
										className={classes.inputfie}
										fullWidth
										onChange={handlePassword}
										label="Password"
										placeholder="enter password"
										variant="outlined"
									/>
								</Grid>
							</Grid>
						</Container>
						<Button onClick={handleLogin} className={classes.loginbuton}>
							<Typography style={{ color: 'white' }}>Login</Typography>
						</Button>
					</Container>
				</Grid>
			</Grid>
		);
	} else {
		return <Redirect to="/Dashboard" />;
	}
}

export default AdminLogin;

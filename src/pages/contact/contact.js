/* eslint-disable no-unused-vars */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { DropzoneArea } from 'material-ui-dropzone';
import { Input } from '@material-ui/core';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	submitname: {
		color: 'white',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: '#387A76',
		color: 'white',
	},
}));

export default function SignIn() {
	const classes = useStyles();

	// for tabs
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const [files, setfiles] = React.useState([]);

	const handleuploadchange = (event) => {};

	return (
		<Grid xs={12}>
			<Container maxWidth="md">
				<Container maxWidth="xs">
					<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
						<Tab label="For Bulk Orders" {...a11yProps(0)} />
						<Tab label="Upload shirt" {...a11yProps(1)} />
					</Tabs>
				</Container>
				<Container>
					<TabPanel value={value} index={0}>
						<Container component="main" maxWidth="xs">
							<CssBaseline />
							<div className={classes.paper}>
								<Typography component="h1" variant="h5">
									Enter Your Details
								</Typography>
								<form className={classes.form} noValidate>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="firstname"
										label="First name"
										name="firstname"
										autoComplete="name"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="lastname"
										label="Last name"
										name="lastname"
										autoComplete="name"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="mobile"
										label="Mobile no."
										name="mobile"
										autoComplete="number"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="lookinffor"
										label="Looking For ?"
										name="lookingfor"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="typofocassion"
										label="Type of occasion ?"
										name="lookingfor"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="typofocassion"
										label="Type of occasion ?"
										name="occasion"
									/>
									<Button type="submit" fullWidth variant="contained" className={classes.submit}>
										<Typography className={classes.submitname}>Submit</Typography>
									</Button>
								</form>
							</div>
						</Container>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Container component="main" maxWidth="xs">
							<CssBaseline />
							<div className={classes.paper}>
								<Typography component="h1" variant="h5">
									Have A shirt in Mind
								</Typography>
								<form className={classes.form} noValidate>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="firstname"
										label="First name"
										name="firstname"
										autoComplete="name"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="lastname"
										label="Last name"
										name="lastname"
										autoComplete="name"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="mobile"
										label="Mobile no."
										name="mobile"
										autoComplete="number"
									/>
									<DropzoneArea onChange={handleuploadchange} />

									<Button type="submit" fullWidth variant="contained" className={classes.submit}>
										<Typography className={classes.submitname}>Submit</Typography>
									</Button>
								</form>
							</div>
						</Container>
					</TabPanel>
				</Container>
			</Container>
		</Grid>
	);
}

// import { Grid, Container } from '@material-ui/core';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles=makeStyles((theme)=>({
// 	main:{
// 		minHeight:'vh',
// 		maxHeight:'fit-content'
// 	}
// }))

// function Contact() {
// 	return <Grid xs={12}>

// 	</Grid>;
// }

// export default Contact;

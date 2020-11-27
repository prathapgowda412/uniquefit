import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, FormControlLabel, Paper, Radio, RadioGroup, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	sizebox: {
		height: 'fit-content',
		padding: '20px 0',
		backgroundColor: '#f2f2f2',
	},
	sizeimages: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'space-evenly',
	},
	sizeimg: {
		width: '90%',
	},
	sizepaper: {
		width: '120px',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		flexWrap: 'wrap',
		alignItems: 'center',
		margin: '5px 20px',
	},
	sizeheading: {
		fontSize: '24px',
		margin: '50px 0',
	},
}));

function getSteps() {
	return ['Size', 'Height', 'Shoulders', 'Body type', 'Body Fit'];
}

function Getsizes() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());
	const steps = getSteps();

	const [size, setsize] = React.useState();
	const [height, setheight] = React.useState();
	const [shoulders, setshoulders] = React.useState();
	const [bodyType, setbodyType] = React.useState();
	const [bodyFit, setbodyFit] = React.useState();

	// handle chanages
	const handlesizechange = (event) => {
		setsize(event.target.value);
		console.log(event.target.value);
		console.log(size);
	};

	const handleshoulderschange = (event) => {
		setshoulders(event.target.value);
	};

	// const isStepOptional = (step) => {
	// 	return step === 1;
	// };

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		// if (!isStepOptional(activeStep)) {
		// 	// You probably want to guard against something like this,
		// 	// it should never occur unless someone's actively trying to break something.
		// 	throw new Error("You can't skip a step that isn't optional.");
		// }

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};
	// function getStepContent(step) {}
	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return (
					<Container className={classes.sizebox}>
						<Typography classname={classes.sizeheading} variant="h4">
							Choose Your Preffered Size
						</Typography>
						<Container className={classes.sizeimages}>
							<RadioGroup row aria-label="position" name="position" defaultValue="top">
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/36.svg"
									/>
									<FormControlLabel
										value="XS-36"
										control={<Radio value="XS-36" onClick={handlesizechange} color="primary" />}
										label="XS-36"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/38.svg"
									/>

									<FormControlLabel
										value="S-38"
										control={<Radio value="s-38" onClick={handlesizechange} color="primary" />}
										label="S-38"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/40.svg"
									/>
									<FormControlLabel
										value="M-40"
										control={<Radio value="M-40" onClick={handlesizechange} color="primary" />}
										label="M-40"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/42.svg"
									/>
									<FormControlLabel
										value="L-42"
										control={<Radio value="L-42" onClick={handlesizechange} color="primary" />}
										label="L-42"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/44.svg"
									/>
									<FormControlLabel
										value="XL-44"
										control={<Radio value="XL-44" onClick={handlesizechange} color="primary" />}
										label="XL-44"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/46.svg"
									/>
									<FormControlLabel
										value="2XL-46"
										control={<Radio value="2XL-46" onClick={handlesizechange} color="primary" />}
										label="2XL-46"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/48.svg"
									/>
									<FormControlLabel
										value="3XL-48"
										control={<Radio value="3XL-48" onClick={handlesizechange} color="primary" />}
										label="3XL-48"
									/>
								</Paper>
							</RadioGroup>
						</Container>
					</Container>
				);
			case 1:
				return <Container> two </Container>;
			case 2:
				return (
					<Container>
						{' '}
						<Typography classname={classes.sizeheading} variant="h4">
							Choose Your Preffered Size
						</Typography>
						<Container className={classes.sizeimages}>
							<RadioGroup row aria-label="position" name="position" defaultValue="top">
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/not-sloping.svg"
									/>
									<FormControlLabel
										value="Not-sloping"
										control={
											<Radio
												value="Not-sloping"
												onClick={handleshoulderschange}
												color="primary"
											/>
										}
										label="Not sloping"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/sloping.svg"
									/>

									<FormControlLabel
										value="Sloping"
										control={
											<Radio value="Sloping" onClick={handleshoulderschange} color="primary" />
										}
										label="Sloping"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/very-sloping.svg"
									/>
									<FormControlLabel
										value="Very-Sloping"
										control={
											<Radio
												value="Very-Sloping"
												onClick={handleshoulderschange}
												color="primary"
											/>
										}
										label="very Sloping"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/dont-know.svg"
									/>
									<FormControlLabel
										value="Dont-know"
										control={
											<Radio value="Dont-know" onClick={handleshoulderschange} color="primary" />
										}
										label="Don't know"
									/>
								</Paper>
							</RadioGroup>
						</Container>
					</Container>
				);
			case 3:
				return (
					<Container>
						{' '}
						<Typography classname={classes.sizeheading} variant="h4">
							Choose Your Preffered Size
						</Typography>
						<Container className={classes.sizeimages}>
							<RadioGroup row aria-label="position" name="position" defaultValue="top">
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/body-type/body/skinny.svg"
									/>
									<FormControlLabel
										value="Not-sloping"
										control={
											<Radio
												value="Not-sloping"
												onClick={handleshoulderschange}
												color="primary"
											/>
										}
										label="Not sloping"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/sloping.svg"
									/>

									<FormControlLabel
										value="Sloping"
										control={
											<Radio value="Sloping" onClick={handleshoulderschange} color="primary" />
										}
										label="Sloping"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/very-sloping.svg"
									/>
									<FormControlLabel
										value="Very-Sloping"
										control={
											<Radio
												value="Very-Sloping"
												onClick={handleshoulderschange}
												color="primary"
											/>
										}
										label="very Sloping"
									/>
								</Paper>
								<Paper className={classes.sizepaper}>
									<img
										className={classes.sizeimg}
										src="https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/dont-know.svg"
									/>
									<FormControlLabel
										value="Dont-know"
										control={
											<Radio value="Dont-know" onClick={handleshoulderschange} color="primary" />
										}
										label="Don't know"
									/>
								</Paper>
							</RadioGroup>
						</Container>
					</Container>
				);
			case 4:
				return <Container> five</Container>;
			default:
				return <Container>sxi</Container>;
		}
	};

	return (
		<div className={classes.root}>
			<Grid xs={12} sm={10}>
				<Stepper alternativeLabel activeStep={activeStep}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				{/* <Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper> */}
			</Grid>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed - you&apos;re finished
						</Typography>
						<Button onClick={handleReset} className={classes.button}>
							Reset
						</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
						<div>
							<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
								Back
							</Button>
							{/* {isStepOptional(activeStep) && (
								<Button
									variant="contained"
									color="primary"
									onClick={handleSkip}
									className={classes.button}>
									Skip
								</Button>
							)} */}

							<Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
export default Getsizes;

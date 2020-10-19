import {
	Card,
	CardMedia,
	Grid,
	Typography,
	Paper,
	Container,
	CardContent,
	Button,
	makeStyles,
} from '@material-ui/core';
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { styled } from '@material-ui/core/styles';
import imgs from './statics/images/girlwhite.jpg';
import dummydata from '../../../data/dummydata.json';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
		flexWrap: 'nowrap',
		height: 'fit-content',
		[theme.breakpoints.up('sm')]: {
			// flexWrap: 'wrap',
			display: 'flex',
			flexDirection: 'row',
		},
		// cols: '1.5',
	},
	button: {
		color: 'orange',
	},
	name: {
		color: 'black',
	},
	cardbox: {
		display: 'flex',
		flexDirection: 'row',
		// display: 'inline',
		position: 'relative',
		width: '100%',
		backgroundColor: 'grey',
		overflowX: 'scroll',
		[theme.breakpoints.down('sm')]: {
			width: 'fit-content',
		},
	},
	shopbutton: {
		color: '#387A76',
		fontWeight: 'bold',
	},
	imgcard: {
		width: '100%',
		position: 'relative',
	},
	trendcard: {
		height: '600px',
		// width: '250px',
		marginLeft: '10px',
		[theme.breakpoints.up('sm')]: {
			width: '500px',
		},
	},
	gridcard: {
		height: '450px',
	},
}));

function Trending() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} className={classes.root}>
			<Container justify="center" alignContent="center" style={{ marginBottom: '35px' }}>
				<Typography variant="h5">Trending</Typography>
			</Container>
			{/* <div className={classes.grid}>
				<GridList className={classes.gridList} cols={1.7}>
					<GridListTile className={classes.gridcard}>
						<Card elevation={0} className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
					<GridListTile>
						<Card className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
					<GridListTile>
						<Card className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
					<GridListTile>
						<Card className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
				</GridList>
			</div> */}

			{/* <Container className={classes.cardbox}>
				<Card elevation="0" square className={classes.card}>
					<CardMedia component="img" image={imgs} title="" />
					<CardContent>
						<Typography className={classes.name}> blue girl </Typography>

						<Link component={Button} to="/ProductPage/10" className={classes.shopbutton}>
							Shop now
						</Link>
					</CardContent>
				</Card>

				<Card elevation="0" square className={classes.card}>
					<CardMedia component="img" image={imgs} title="" />
					<CardContent>
						<Typography className={classes.name}> blue man </Typography>

						<Link component={Button} to="/ProductPage/10" className={classes.shopbutton}>
							Shop now
						</Link>
					</CardContent>
				</Card>
			</Container> */}

			<Grid item container xs={12} alignContent="stretch" spacing={2} justify="space-around">
				<Grid item container xs={10} sm={3}>
					<Card elevation="0" square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}> heding </Typography>

							<Link component={Button} to="/ProductPage/1" className={classes.shopbutton}>
								Shop now
							</Link>
						</CardContent>
					</Card>
				</Grid>
				<Grid item container xs={10} sm={3}>
					<Card elevation="0" square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}> heding </Typography>

							<Link component={Button} to="/ProductPage/10" className={classes.shopbutton}>
								Shop now
							</Link>
						</CardContent>
					</Card>
				</Grid>
				<Grid item container xs={10} sm={3}>
					<Card elevation="0" square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}> heding </Typography>

							<Link component={Button} to="/ProductPage/10" className={classes.shopbutton}>
								Shop now
							</Link>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default Trending;
{
	/* <Grid xs={12} sm={12} alignContent="stretch" spacing={5} style={{ backgroundColor: 'red' }}>
				<Grid item container xs={4} sm={4}>
					<Card>
						<CardMedia component="img" image={require('../statics/images/blackdog.jpg')} />
					</Card>
				</Grid>
				<Grid item container xs={4} sm={3}>
					<Card>
						<CardMedia component="img" image={require('../statics/images/blackdog.jpg')} />
					</Card>
				</Grid>
				<Grid item container xs={4} sm={3}>
					<Paper>
						<CardMedia component="img" image={require('../statics/images/blackdog.jpg')} />
					</Paper>
				</Grid>
			</Grid> */
}

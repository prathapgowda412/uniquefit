import { makeStyles } from '@material-ui/core';

const shopStyles = makeStyles((theme) => ({
	root: {
		minHeight: '800px',
		maxHeight: 'fit-content',
	},
	link: {
		textDecoration: 'none',
	},
	topbox: {
		minHeight: '120px',
		maxHeight: 'fit-content',
		marginTop: '10px',
		marginBottom: '25px',
		backgroundColor: '#f2f2f2',
	},
	shopbox: {
		height: 'fit-content',
		position: 'relative',
	},
	filterbox: {
		height: 'fit-content',
		marginTop: '20px',
		padding: '20px 0',
		overflow: 'hidden',
		backgroundColor: '#fff',
		position: 'sticky',
		[theme.breakpoints.down('sm')]: {
			height: '50px',
			padding: '0',
		},
	},
	productsbox: {
		height: 'fit-content',
	},

	cardproduct: {
		width: '100%',
	},
	filterproducts: {
		fontSize: '21px',
		marginBottom: '20px',
	},
	flitercont: {
		height: 'fit-content',
		width: '80%',
		position: 'relative',
		// backgroundColor: 'white',
	},
	ul: {
		listStyleType: 'none',
	},
	fliterhead: {
		fontSize: '24px',
	},
	li: {
		margin: '5px 0',
	},
	labeltext: {
		fontSize: '18px',
		marginLeft: '5px',
	},
	checkboxinput: {
		height: '0px',
	},
	inputcheckbox: {
		color: 'blue',
	},
	divider: {
		height: '1.5px',
		// width: '90%',
		margin: '20px 0',
		postion: 'relative',
		backgroundColor: '#d3d3d3',
	},
	hidecomp: {
		height: '50px',
		width: '96%',
		// backgroundColor: 'grey',
	},
	applybutton: {
		backgroundColor: '#387a76',
		color: 'white',
	},
}));

export default shopStyles;

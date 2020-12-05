const { makeStyles } = require('@material-ui/core');

const productStyles = makeStyles((theme) => ({
	main: {
		marginTop: '48px',
		height: 'fit-content',
		backgroundColor: 'white',
	},
	leftgrid: {
		height: '600px',
	},
	showdesc: {
		height: '550px',
		// backgroundColor: 'purple',
	},

	tabss: {
		width: '100%',
		height: '600px',
	},
	tablistbotom: {
		height: '100px',
	},
	tabpanelbox: {
		height: '450px',
		overflow: 'hidden',
	},
	paneltab: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tablist: {
		display: 'flex',
		listStyleType: 'none',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	tabitem: {
		width: '80px',
		height: '80px',
		'&:hover': {
			cursor: 'pointer',
			border: '1px solid grey',
		},
	},
	iconimage: {
		width: '100%',
		height: '100%',
	},
	bigimage: {
		width: '60%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '90%',
		},
	},
	productnametag: {
		color: '#282C3F',
		fontSize: '24px',
	},
	spacebox: {
		height: '20px',
	},
	customizebutton: {
		width: '237px',
		marginTop: '20px',
		margin: 'auto',
		marginBottom: '20px',
		height: '60px',
		textDecoration: 'none',
		boxShadow: '0 2px 10px -5px #00000060',
		backgroundColor: '#387A76',
		color: 'white',
		transition: 'all 0.3s',
		'&:hover': {
			backgroundColor: '#034b46',
			color: 'white',
			transform: ' translateY(-1.8px)',
		},
	},
	productdet: {
		fontSize: '18px',
		fontWeight: '600',
		color: '#282C3F',
	},
	pricetag: {
		color: '#282C3F',
		fontSize: '24px',
	},
	salepricetag: {
		color: '#6B6E7B',
		fontSize: '18px',
	},
	Link: {
		textDecoration: 'none',
	},
	inclusivetext: {
		color: '#03A685',
		fontSize: '16px',
	},
	customtext: {
		color: 'white',
	},
	pricebox: {
		display: 'flex',
		width: '200px',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	nametitle: {
		fontSize: '16px',
		color: '#282C3F',
	},
	prodtext: {
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: '500',
		color: '#0022C5',
	},
}));

export default productStyles;

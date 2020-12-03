const { makeStyles } = require('@material-ui/core');

const cartStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'white',
	},

	cartappbar: {
		backgroundColor: '#fff',
		padding: '20px',
		height: '75px',
		width: '100%',
		marginBottom: '5px',
		position: 'relative',
		boxShadow: '2px 0px 5px -2px rgba(10,10,10,0.3)',
	},
	removebutton: {
		backgroundColor: 'white',
		float: 'right',
	},
	cartbox: {
		// backgroundColor: '#f9f9f9',
		minHeight: '100px',
		maxHeight: 'fit-content',
		// marginTop: '15px',
	},
	cardpaper: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		height: '150px',
	},
	leftbox: {
		minHeight: '100px',
		maxHeight: 'fit-content',
		paddingTop: '20px',
	},
	rightbox: {
		height: '500px',
		// backgroundColor: '#dcd',
		borderLeft: '1.5px solid rgba(100,100,100,0.40)',
		marginTop: '20px',
	},
	itemcard: {
		width: '90%',
		// minHeight: 'fit-content',
		height: 'fit-content',
		marginTop: '10px',
		boxShadow: '0px 1px 10px -5px rgba(10,10,10,0.3)',
		// border: '1.5px solid #52525275',
		borderRadius: '10px',
	},
	itemimg: {
		width: '25%',
		position: 'relative',
		height: '100%',
		objectFit: 'contain',
	},
	papercontent: {
		width: '75%',
		position: 'relative',
		height: '100%',
	},
	papercontainer: {
		marginTop: '5px',
	},
	productpricetag: {
		fontSize: '16px',
		color: '#282C3F',
	},
	productnametag: {
		fontSize: '18px',
		color: '#282C3F',
	},
	cartcalcont: {
		borderRadius: '5px ',
		boxShadow: '0px 0px 10px -5px rgba(50,50,71,0.26)',
		// border: '1px solid black',
		height: 'fit-content',
		width: '80%',
		padding: '20px 0 20px',
	},
	placeorderbutton: {
		margin: '24px 0 24px',
		padding: '16px 80px',
		backgroundColor: '#387A76',
		color: 'white',
		borderRadius: '0px',
		'&:hover': {
			backgroundColor: '#034b46',
		},
	},
	placebutontext: {
		color: 'white',
		fontSize: '18px',
	},
	adressbox: {
		height: 'fit-content',
		marginTop: '20px',
	},
	labelname: {
		color: '#387A76',
		fontSize: '20px',
	},
	sizebox: {
		height: 'fit-content',
		padding: '20px 0',
		backgroundColor: '#fff',
		textAlign: 'center',
		marginTop: '50px',
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
		width: '115px',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		flexWrap: 'wrap',
		alignItems: 'center',
		margin: '5px 20px',
	},
	paperaddress: {
		marginTop: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	setaddressbuton: {
		// backgroundColor: '#387A76',
		backgroundColor: 'black',

		padding: '5px 10px',
	},
	sizeheading: {
		fontSize: '26px',
		textAlign: 'center',
		margin: '50px 0',
		color: 'red',
	},
	adressbox: {
		display: 'flex',
		justifyContent: 'center',
	},
	emptyimg: {
		width: '100%',
		objectFit: 'contain',
	},
	emptyimgmob: {
		width: '100%',
		objectFit: 'container',
	},
	adressform: {
		height: 'fit-content',
		backgroundColor: 'grey',
	},
}));

export default cartStyles;

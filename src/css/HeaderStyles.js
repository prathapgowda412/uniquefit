const Headerstyles = (theme) => ({
	drawerBox: {
		width: '400px',
	},
	header: {
		backgroundColor: 'white',
		position: 'sticky',
		height: '80px',
		elevation: '1',
		textDecoration: 'none',
		color: 'black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0 5px 8px -8px rgba(17, 17, 17, 0.329)',
		// box-shadow: '0 5px 10px #111',
	},
	linkactive: {
		color: '#387A76',
	},
	toolbar: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	mobtoolbar: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'space-between',
	},
	button: {
		color: 'black',
		fontWeight: '600',
	},
	logo: {
		height: '35px',
	},
	ul: {
		listStyleType: 'none',
		margin: 'auto',

		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		// listStyle: 'inline',
	},
	ulmob: {
		listStyleType: 'none',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
	},
	limob: {
		margin: '10px 0px',
		textDecoration: 'none',
		color: 'black',
		'&:hover': {
			color: '#034b46',
			cursor: 'pointer',
		},

		// marginTop: '10px',
	},
	li: {
		backgroundColor: 'white',
		width: 'fit-content',
		fontWeight: 500,
		color: 'black',
		fontSize: '16px',
		margin: '5px 10px',
		transition: '0.2s',
		textTransform: 'uppercase',
		textDecoration: 'none',

		'&:hover': {
			color: '#034b46',
			cursor: 'pointer',
		},
	},
	uploadshirt: {
		textDecoration: 'none',
		color: '#EE5F73',
	},
	activecls: {
		color: '#034b46',
		fontSize: '16px',
		transition: '0.3s',
		borderBottom: '2px solid #034b46',
	},

	nav: {
		display: 'flex',
		width: 'auto',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	sideBarIcon: {
		padding: 0,
		color: 'white',
		cursor: 'pointer',
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
		alignItems: 'center',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
			color: '#387A76',
			cursor: 'pointer',
		},
	},
	drawerprofile: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	drawer: {
		width: '400px',
	},
	requestcallbutton: {
		color: 'white',
		backgroundColor: '#387A76',
		fontSize: '14px',
		height: '38px',
		width: '180px',
		marginLeft: '20px',
		borderRadius: '20px',
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
	closebox: {
		width: '100%',
		height: '50px',
		position: 'relative',
	},
	drawercont: {
		height: 'fit-content',
		position: 'relative',
		padding: '10px 0 10px 0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginbutton: {
		// backgroundColor: 'white',
		backgroundColor: '#387A76',
		height: '38px',
		color: 'white',
		// color: '#387A76',
		width: '148px',
		display: 'flex',
		borderRadius: '5px',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px #0000006b',
		boxShadow: '0px 5px 5px -5px #0000006b',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: '#034b46',
			textDecoration: 'none',
			color: 'white',
		},
	},
	loginsignup: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	navprofile: {
		display: 'flex',
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-between',
	},
	closebuton: {
		// color: white,
		// backgroundColor: 'white',
	},
	drawerpaper: {
		width: '290px',
		position: 'relative',
	},
	logoutname: {
		color: 'white',
		fontSize: '16px',
	},
	popover: {
		// pointerEvents: 'none',
		pointerEvents: 'none',
		cursor: 'pointer',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	comingsoon: {
		color: 'black',
		textDecoration: 'none',
		transition: 'all 1.3s',
	},
	popoverbox: {
		padding: '2px',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	menuicon: {
		fontSize: '24px',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
		transition: 'all 0.1s',
		'&:hover': {
			color: '#034b46',
		},
	},
	drawer: {
		transition: '1s',
	},
	requestbuton: {
		color: 'white',
		fontWeight: '600',
	},
	carticon: {
		fontSize: '22px',
	},
	signupboton: {
		backgroundColor: '#034b46',
		textDecoration: 'none',
		color: 'white',
		borderRadius: '5px',
		padding: '7px 12px',
	},
	loginbuton: {
		textDecoration: 'none',
	},
	drawerheader: {
		minHeight: '120px',
		maxHeight: 'fit-content',
		width: '100%',
		backgroundColor: '#387A76',
		paddingBottom: '5px',
	},
	logindrawer: {
		padding: '7px 12px',
		color: 'white',
	},
	signupdrawer: {
		backgroundColor: 'white',
		borderRadius: '5px',
		color: 'black',
	},
});

export default Headerstyles;

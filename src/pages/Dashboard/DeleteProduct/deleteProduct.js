import { Grid, Typography, makeStyles, TextField, Container, Button } from '@material-ui/core';
import Axios from 'axios';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	main: {},
	deletetab: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	deleteinput: {
		width: '350px',
		margin: '5px 0px',
	},
	deletebuton: {
		backgroundColor: 'red',
		marginTop: '20px',
		width: '300px',
		'&:hover': {
			backgroundColor: 'red',
		},
	},
}));

function DeleteProduct() {
	const [productid, setproductid] = React.useState('');
	const [sucessmsg, setsuccessmsg] = React.useState('');
	const [errmsg, seterrmsg] = React.useState('');
	const deleteidchange = (event) => {
		setproductid(event.target.value);
		seterrmsg('');
		seterrmsg('');
	};
	console.log(productid);

	const handleDelete = async () => {
		let idData = { productid: productid };
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-productid': productid,
			},
		};

		let resp = await Axios(`${process.env.REACT_APP_API_URL}/products/delete-product-by-id`, config);
		// let resp = await Axios(`${process.env.REACT_APP_API_URL}/products/delete-product-by-id`, { idData });
		console.log(resp);
		if (resp.status == 200) {
			setsuccessmsg('Done deleting');
		} else {
			seterrmsg('wrong id');
		}
	};

	const classes = useStyles();
	return (
		<Grid item xs={6} className={classes.main}>
			<Container className={classes.deletetab}>
				<Typography> Delete Product</Typography>
				<TextField
					variant="outlined"
					className={classes.deleteinput}
					placeholder="Product id"
					onChange={deleteidchange}
				/>
				<Typography style={{ color: 'red' }}> {errmsg} </Typography>
				<Button className={classes.deletebuton} onClick={handleDelete}>
					{' '}
					Delete{' '}
				</Button>
				<Typography style={{ color: 'green' }}> {sucessmsg} </Typography>
			</Container>
		</Grid>
	);
}

export default DeleteProduct;

const express = require('express');
const app = express();
var router = express.Router();
var assert = require('assert');
// const mongoconnect = require('./DB/connectdb');

const { MongoClient } = require('mongodb');

async function main() {
	/**
	 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
	 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
	 */
	// const uri =
	// 	'mongodb+srv://prathap:prathapgowda6@cluster0.b8ykq.mongodb.net/<uniquefit>?retryWrites=true&w=majority';

	const uri = 'mongodb+srv://prathap:prathapgowda6@cluster0.b8ykq.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useUnifiedTopology: true });

	try {
		// Connect to the MongoDB cluster
		await client.connect();
		console.log('connected to mongodb');
		// Make the appropriate DB calls
		// await listDatabases(client);
		await getProducts(client);

		// await findProduct(client, 'blue'); // finding bye blue color
		// await listProducts(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

async function findProduct(client, colorofProduct) {
	console.log(` finding by ${colorofProduct} :`);
	const result = await client.db('uniquefit').collection('products').findOne({ color: colorofProduct });
	if (result) {
		console.log(result);
	} else {
		console.log('dint find');
	}
}

async function getProducts(client) {
	console.log('getting all products');
	const products = await client.db('uniquefit').collection('products').find();
	if (products) {
		// products.documents.forEach((product) => console.log(product));
		// console.log(products.documents);
		console.log(products.documents);
	} else {
		console.log('no products');
	}
}

async function listProducts(client) {
	console.log('printing all products: ');
	const productList = await client.db('uniquefit').collection('product');
	productList.collection.map((product, index) => console.log(` - ${product.name}`));
	// console.log(productList);
}

async function listDatabases(client) {
	console.log('helojjj');
	databasesList = await client.db().admin().listDatabases();

	console.log('Databases:');
	databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

// mongoconnect();
const port = process.env.Port || 5000;

app.listen(port, () => {
	console.log('server started ....!');
});

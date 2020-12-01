import httpService from './httpService';
import config from '../config.json';
import { getUserData } from './authService';

export function getProducts() {
	return httpService.get(config.getProducts);
}

export function addToCart(item) {
	let userId = getUserData();
	let itemData = {
		userId,
		item,
	};
	return httpService.post(config.addToCart, itemData);
}

export function removeFromCart(productid) {
	let userId = getUserData();
	let prodData = {
		userId,
		productid,
	};
	return httpService.post(config.removeFromCart, prodData);
}

export function getCartItems() {
	const userId = getUserData();
	let data = {
		userId,
	};
	return httpService.post(config.getCartItems, data);
}

export function getOrders() {
	const userId = getUserData();
	let data = {
		userId,
	};
	return httpService.post(config.getOrders, data);
}

export function addOrder(products, address, size, height, shoulders, bodyType, bodyFit) {
	const userId = getUserData();
	let data = {
		userId,
		products,
		address,
		size,
		height,
		shoulders,
		bodyType,
		bodyFit,
	};
	return httpService.post(config.addOrder, data);
}

export function getCustomisations() {
	return httpService.get(config.getCustomisations);
}

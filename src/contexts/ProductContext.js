import React, { useEffect, createContext, useState } from 'react';
import { getProducts } from '../services/fetchService';

export const productContext = createContext();

export const ProductContextProvider = (props) => {
	let [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then(({ data: products }) => {
			setProducts(products);
			// console.log(products);
		});
	}, []);

	return <productContext.Provider value={{ products, setProducts }}>{props.children}</productContext.Provider>;
};

import React, { useEffect, createContext, useState } from 'react';
import { getCustomisations } from '../services/fetchService';

export const customizationContext = createContext();

export const CustomizationContextProvider = (props) => {
	let [customizationsData, setCustomizationsData] = useState([]);

	useEffect(() => {
		getCustomisations().then(({ data: customization }) => {
			setCustomizationsData(customization);
			// console.log('customs belo');
			// console.log(customizationsData);
		});
	}, []);

	return (
		<customizationContext.Provider value={{ customizationsData, setCustomizationsData }}>
			{props.children}
		</customizationContext.Provider>
	);
};

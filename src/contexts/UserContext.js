import React, { useState, useEffect, createContext } from 'react';

import { getUserData } from './../services/authService';

export const userContext = createContext();

export const UserContextProvider = (props) => {
	let [user, setUser] = useState();
	useEffect(() => {
		getUserData().then(({ data: user }) => {
			setUser(user);
		});
	});
	return <userContext.Provider value={{ user, setUser }}>{props.children}</userContext.Provider>;
};

import React, { useState, useEffect, createContext } from 'react';
import { useEffect } from 'react';
import { getUserData } from './../services/authService';

export const userContext = createContext();

export const UserContextProvider = (props) => {
	let [user, setUser] = useState();
	useEffect(() => {
		getUserData().then();
	});
};

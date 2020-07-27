import { userActionsTypes } from '../actionTypes';

export default {
	setUserData: data => ({
		type: userActionsTypes.SET_DATA,
		payload: data,
	}),
	setIsAuth: bool => ({
		type: userActionsTypes.SET_AUTH,
		payload: bool,
	}),
};

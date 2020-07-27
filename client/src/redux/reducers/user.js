import { LocalStorage } from '@src/utils/LocalStorage';
import { userActionsTypes } from '../actionTypes';

const initialState = {
	data: null,
	token: LocalStorage.get('token'),
	isAuth: !!LocalStorage.get('token'),
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case userActionsTypes.SET_DATA:
			return {
				...state,
				data: payload,
				isAuth: true,
				token: LocalStorage.get('token'),
			};
		default:
			return state;
	}
};

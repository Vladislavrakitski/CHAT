import { messagesActionsTypes } from '../actionTypes';

const initialState = {
	items: [],
	isLoading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case messagesActionsTypes.ADD_MESSAGE:
			return {
				...state,
				items: [...state.items, payload],
			};
		case messagesActionsTypes.SET_ITEMS:
			return {
				...state,
				items: payload,
				isLoading: false,
			};
		case messagesActionsTypes.SET_LOADER:
			return {
				...state,
				isLoading: payload,
			};
		default:
			return state;
	}
};

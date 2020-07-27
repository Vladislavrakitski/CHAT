import { dialogsActionsTypes } from '../actionTypes';

const initialState = {
	items: [],
	currentDialogId: '1',
	isLoading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case dialogsActionsTypes.SET_ITEMS:
			return {
				...state,
				items: payload,
			};
		case dialogsActionsTypes.SET_CURRENT_ID:
			return {
				...state,
				currentId: payload,
			};
		default:
			return state;
	}
};

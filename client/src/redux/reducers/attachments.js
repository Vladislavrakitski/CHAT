import { attachmentsActionsTypes } from '../actionTypes';

const initialState = {
	items: [],
};

export const attachmentsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case attachmentsActionsTypes.SET_ITEMS:
			return {
				...state,
				items: payload,
			};
		default:
			return state;
	}
};

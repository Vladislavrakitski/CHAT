import { dialogsActionsTypes } from '../actionTypes';

export default {
	setDialogs: items => ({
		type: dialogsActionsTypes.SET_ITEMS,
		payload: items,
	}),
	updateStatus: items => ({
		type: dialogsActionsTypes.LAST_MESSAGE_STATUS,
		payload: items,
	}),
	setCurrentId: items => ({
		type: dialogsActionsTypes.SET_CURRENT_ID,
		payload: items,
	}),
};

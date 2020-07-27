import { messagesActionsTypes } from '../actionTypes';

export default {
	setMessages: items => ({
		type: messagesActionsTypes.SET_ITEMS,
		payload: items,
	}),
	setLoader: bool => ({
		type: messagesActionsTypes.SET_LOADER,
		payload: bool,
	}),
};

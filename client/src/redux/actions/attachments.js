import { attachmentsActionsTypes } from '../actionTypes';

export default {
	setAttachments: items => ({
		type: attachmentsActionsTypes.SET_ITEMS,
		payload: items,
	}),
	removeAttachments: file => ({
		type: attachmentsActionsTypes.REMOVE_ITEM,
		payload: file,
	}),
};

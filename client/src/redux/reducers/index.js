import { combineReducers } from 'redux';

import { attachmentsReducer } from './attachments';
import { messagesReducer } from './messages';
import { dialogsReducer } from './dialogs';
import { userReducer } from './user';

export default combineReducers({
	attachmentsReducer,
	messagesReducer,
	dialogsReducer,
	userReducer,
});

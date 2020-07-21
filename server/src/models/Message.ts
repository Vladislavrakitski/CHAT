import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
	text: {
		type: string;
		require: boolean;
	};
	dialog: {
		type: Schema.Types.ObjectId;
		require: true;
		ref: string;
	};
	unread: {
		type: string;
		default: true;
	};
}

const MessageSchema = new Schema(
	{
		text: { type: String, require: Boolean },
		dialog: { type: Schema.Types.ObjectId, ref: 'Dialog', require: true },
		user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
		unread: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

const MessageModel = mongoose.model<IMessage>('Message', MessageSchema);

export default MessageModel;

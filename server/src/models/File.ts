import mongoose, { Schema, Document } from 'mongoose';
import { IMessage } from './Message';
import { IUser } from './User';

export interface IFile extends Document {
	filename: string;
	size: number;
	ext: string;
	url: string;
	message: IMessage | string;
	user: IUser | string;
}

export type IFileDocument = Document & IFile;

const FilesSchema = new Schema(
	{
		filename: String,
		size: Number,
		ext: String,
		url: String,
		message: { type: Schema.Types.ObjectId, ref: 'Message', require: true },
		user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
	},
	{
		timestamps: true,
	}
);

const FileModel = mongoose.model<IFile>('Upload', FilesSchema);

export default FileModel;

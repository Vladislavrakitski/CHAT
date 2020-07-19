import mongoose from 'mongoose';
import { db } from '../config/index';

mongoose.connect(
	db.uri,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	(err: any) => {
		if (err) {
			throw Error(err);
		}
	}
);

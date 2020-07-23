import { NextFunction } from 'express';
import { UserModel } from '../models';

export default (req: any, _: Response, next: NextFunction) => {
	if (req.user) {
		UserModel.findByIdAndUpdate(
			{ _id: req.user.id },
			{ last_seen: new Date() },
			{ new: true }
		);
	}
	next();
};

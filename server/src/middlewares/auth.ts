import { NextFunction } from 'express';

import { verifyToken } from '../helpers';
import { Decoded } from '../helpers/verifyToken';

export default (req: any, res: any, next: NextFunction): void => {
	if (
		req.path === '/user/signin' ||
		req.path === '/user/signup' ||
		req.path === '/user/verify'
	) {
		return next();
	}

	const token: string | null =
		'token' in req.headers ? (req.headers.token as string) : null;

	if (token) {
		verifyToken(token)
			.then((user: Decoded | null) => {
				if (user) {
					req.user = user.data._doc;
				}
				next();
			})
			.catch(() => {
				res.status(403).json({ message: 'Invalid auth token provided.' });
			});
	}
};

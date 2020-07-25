import express, { NextFunction } from 'express';
import bcrypt from 'bcrypt';
import socket from 'socket.io';
import { validationResult, ValidationError, Result } from 'express-validator';
//import mailer from "../core/mailer";

import { UserModel } from '../models';
import { IUser } from '../models/User';
import { createToken } from '../helpers';
// import { SentMessageInfo } from 'nodemailer/lib/sendmail-transport';

// export default async (req: any, res: any, next: NextFunction) => {
// 	console.log(req.body);

// 	const { email, fullname, password }: IUser = req.body;

// 	try {
// 		const newUser = { email, fullname, password };
// 		const user = await UserModel.create(newUser);
// 		res.json(user);
// 	} catch (e) {
// 		if (e.code === 11000) {
// 			res.json('User with that email already exist');
// 			return next();
// 		}
// 		next();
// 	}
// };

class AuthController {
	io: socket.Server;

	constructor(io: socket.Server) {
		this.io = io;
	}

	create(req: express.Request, res: express.Response) {
		const postData: { email: string; fullname: string; password: string } = {
			email: req.body.email,
			fullname: req.body.fullname,
			password: req.body.password,
		};

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.status(422).json({ errors: errors.array() });
		} else {
			const user = new UserModel(postData);

			user
				.save()
				.then((obj: IUser) => {
					res.json(obj);

					console.log('sending email in the near future ...');

					// mailer.sendMail(
					// 	{
					// 		from: 'admin@test.com',
					// 		to: postData.email,
					// 		subject: 'Confirm for CHAT',
					// 		html: `Confirm your Email <a href="http://localhost:3000/signup/verify?hash=${obj.confirm_hash}">click to link</a>`,
					// 	},
					// 	function (err: Error | null, info: SentMessageInfo) {
					// 		if (err) {
					// 			console.log(err);
					// 		} else {
					// 			console.log(info);
					// 		}
					// 	}
					// );
				})
				.catch(reason => {
					res.status(500).json({
						status: 'error',
						message: reason,
					});
				});
		}
	}

	login = (req: express.Request, res: express.Response): void => {
		const postData: { email: string; password: string } = {
			email: req.body.email,
			password: req.body.password,
		};

		const errors: Result<ValidationError> = validationResult(req);

		if (!errors.isEmpty()) {
			res.status(422).json({ errors: errors.array() });
		} else {
			UserModel.findOne(
				{ email: postData.email },
				(err, user: { email: string; password: string }) => {
					if (err || !user) {
						return res.status(404).json({
							message: 'User not found',
						});
					}

					if (
						user.password &&
						bcrypt.compareSync(postData.password, user.password)
					) {
						const token = createToken(user);
						res.json({
							status: 'success',
							token,
						});
					} else {
						res.status(403).json({
							status: 'error',
							message: 'Incorrect password or email',
						});
					}
				}
			);
		}
	};
}

export default AuthController;

import express from 'express';
import socket from 'socket.io';

import { UserModel } from '../models';
import { IUser } from '../models/User';

class UserController {
	io: socket.Server;

	constructor(io: socket.Server) {
		this.io = io;
	}

	show = (req: express.Request, res: express.Response): void => {
		const id: string = req.params.id;
		UserModel.findById(id, (err: any, user: IUser) => {
			if (err) {
				return res.status(404).json({
					message: 'User not found',
				});
			}
			res.json(user);
		});
	};

	getMe = (req: any, res: express.Response): void => {
		const id: string = req.user && req.user._id;
		UserModel.findById(id, (err: any, user: IUser) => {
			if (err || !user) {
				return res.status(404).json({
					message: 'User not found',
				});
			}
			res.json(user);
		});
	};

	findUsers = (req: any, res: express.Response): void => {
		const query: string = req.query.query;
		UserModel.find()
			.or([
				{ fullname: new RegExp(query, 'i') },
				{ email: new RegExp(query, 'i') },
			])
			.then((users: IUser[]) => res.json(users))
			.catch((err: any) => {
				return res.status(404).json({
					status: 'error',
					message: err,
				});
			});
	};

	delete = (req: express.Request, res: express.Response): void => {
		const id: string = req.params.id;
		UserModel.findOneAndRemove({ _id: id })
			.then((user: IUser | null) => {
				if (user) {
					res.json({
						message: `User ${user.fullname} deleted`,
					});
				} else {
					res.status(404).json({
						status: 'error',
					});
				}
			})
			.catch((err: any) => {
				res.json({
					message: err,
				});
			});
	};

	verify = (req: any, res: express.Response): void => {
		const hash: string = req.query.hash;

		if (!hash) {
			res.status(422).json({ errors: 'Invalid hash' });
		} else {
			UserModel.findOne({ confirm_hash: hash }, (err: any, user: IUser) => {
				if (err || !user) {
					return res.status(404).json({
						status: 'error',
						message: 'Hash not found',
					});
				}

				user.confirmed = true;
				user.save((err: any) => {
					if (err) {
						return res.status(404).json({
							status: 'error',
							message: err,
						});
					}

					res.json({
						status: 'success',
						message: 'Account has been created!',
					});
				});
			});
		}
	};
}

export default UserController;

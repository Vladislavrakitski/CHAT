import express from 'express';
import socket from 'socket.io';
import { UserCtrl } from '../../controllers';

export default (app: express.Express, io: socket.Server) => {
	const UserController = new UserCtrl(io);

	app.get('/user/me', UserController.getMe);
	app.get('/user/verify', UserController.verify);
	app.get('/user/find', UserController.findUsers);
	app.get('/user/:id', UserController.show);
	app.delete('/user/:id', UserController.delete);
};

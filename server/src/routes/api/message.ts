import express from 'express';
import socket from 'socket.io';
import { MessageCtrl } from '../../controllers';

export default (app: express.Express, io: socket.Server) => {
	const MessageController = new MessageCtrl(io);

	app.get('/messages', MessageController.index);
	app.post('/messages', MessageController.create);
	app.delete('/messages', MessageController.delete);
};

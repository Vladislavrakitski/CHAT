import express from 'express';
import socket from 'socket.io';
import { DialogCtrl } from '../../controllers';

export default (app: express.Express, io: socket.Server) => {
	const DialogController = new DialogCtrl(io);

	app.get('/dialogs', DialogController.index);
	app.delete('/dialogs/:id', DialogController.delete);
	app.post('/dialogs', DialogController.create);
};

import express from 'express';
import socket from 'socket.io';

import { auth, visit } from '../middlewares';
import { userRoutes, messageRoutes, dialogRoutes, fileRoutes } from './api';
import { authRoutes } from './auth';

const createRoutes = (app: any, io: socket.Server) => {
	app.use(express.json());

	app.use(auth);
	app.use(visit);

	authRoutes(app, io);
	userRoutes(app, io);
	messageRoutes(app, io);
	dialogRoutes(app, io);
	fileRoutes(app);
};

export default createRoutes;

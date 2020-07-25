import express from 'express';
import socket from 'socket.io';

// import { authCtrl } from '../../controllers';
import { AuthCtrl } from '../../controllers';
import { loginValidator, registerValidator } from '../../helpers/validators';

export default (app: express.Express, io: socket.Server) => {
	const AuthController = new AuthCtrl(io);
	// app.post('/user/signup', registerValidator, authCtrl);

	app.post('/user/signup', registerValidator, AuthController.create);
	app.post('/user/signin', loginValidator, AuthController.login);
};

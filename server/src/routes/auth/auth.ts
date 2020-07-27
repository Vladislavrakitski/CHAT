import express from 'express';

// import { authCtrl } from '../../controllers';
import { AuthCtrl } from '../../controllers';
import { loginValidator, registerValidator } from '../../helpers/validators';

export default (app: express.Express) => {
	const AuthController = new AuthCtrl();
	// app.post('/user/signup', registerValidator, authCtrl);

	app.post('/user/signup', registerValidator, AuthController.create);
	app.post('/user/signin', loginValidator, AuthController.login);
};

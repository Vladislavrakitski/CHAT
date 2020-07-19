import bodyParser from 'body-parser';
import express from 'express';
import socket from 'socket.io';

// import { updateLastSeen, checkAuth } from "../middlewares";
// import { loginValidation, registerValidation } from "../utils/validations";

// import multer from "./multer";

// import {
//   UserCtrl,
//   DialogCtrl,
//   MessageCtrl,
//   UploadFileCtrl,
// } from "../controllers";

const createRoutes = (app: express.Express) => {
	// const UserController = new UserCtrl(io);
	// const DialogController = new DialogCtrl(io);
	// const MessageController = new MessageCtrl(io);
	// const UploadFileController = new UploadFileCtrl();

	app.use(bodyParser.json());
	// app.use(checkAuth);
	// app.use(updateLastSeen);

	app.get('/', (_: express.Request, res: express.Response) => {
		res.send('Hello, World!');
	});

	// app.get("/user/me", UserController.getMe);
	// app.get("/user/verify", UserController.verify);
	// app.post("/user/signup", registerValidation, UserController.create);
	// app.post("/user/signin", loginValidation, UserController.login);
	// app.get("/user/find", UserController.findUsers);
	// app.get("/user/:id", UserController.show);
	// app.delete("/user/:id", UserController.delete);

	// app.get("/dialogs", DialogController.index);
	// app.delete("/dialogs/:id", DialogController.delete);
	// app.post("/dialogs", DialogController.create);

	// app.get("/messages", MessageController.index);
	// app.post("/messages", MessageController.create);
	// app.delete("/messages", MessageController.delete);

	// app.post("/files", multer.single("file"), UploadFileController.create);
	// app.delete("/files", UploadFileController.delete);
};

export default createRoutes;
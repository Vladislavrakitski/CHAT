import express from 'express';
import { FileCtrl } from '../../controllers';

export default (app: express.Express) => {
	const FileController = new FileCtrl();

	// app.post('/files', multer.single('file'), FileController.create);
	app.delete('/files', FileController.delete);
};

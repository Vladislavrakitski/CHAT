import { Request } from 'express';

export default {
	error: (err: any, req: Request, res: any, next: any) => {
		return res.boom.badImplementation(err.toString(), {
			success: false,
			message: err.message,
		});
	},

	all: (req: Request, res: any, next: any) => {
		return res.boom.notFound('Error', { success: false });
	},
};

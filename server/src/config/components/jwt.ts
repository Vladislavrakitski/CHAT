export default {
	secret: process.env.JWT_SECRET || 'mysecretmessage',
	expiresIn: process.env.JWT_STORAGE || '1d',
};

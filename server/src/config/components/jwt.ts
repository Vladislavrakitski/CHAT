export default {
	secret: process.env.JWT_SECRET || 'mysecretmessage',
	expiresIn: process.env.JWT_MAX_AGE || '1d',
};

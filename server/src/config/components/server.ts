export default {
	port: process.env.PORT || 3003,
	env: process.env.NODE_ENV || 'development',

	isDevelopment: process.env.NODE_ENV === 'development',
	isProduction: process.env.NODE_ENV === 'production',
	isTest: process.env.NODE_ENV === 'test',
};

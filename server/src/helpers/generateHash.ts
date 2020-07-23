import { hash } from 'bcrypt';

export default (password: string): Promise<string> => {
	return new Promise(
		(resolve: (hash: string) => void, reject: (err: Error) => void) => {
			hash(password, 10, (err: Error, hash: string) => {
				if (err) return reject(err);
				resolve(hash);
			});
		}
	);
};

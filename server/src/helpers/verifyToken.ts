import { VerifyErrors, verify } from 'jsonwebtoken';

import { IUser } from '../models/User';
import { jwt } from '../config';

export interface Decoded {
	data: {
		_doc: IUser;
	};
}

export default (token: string): Promise<Decoded | null> =>
	new Promise(
		(
			resolve: (decoded: Decoded) => void,
			reject: (err: VerifyErrors) => void
		) => {
			verify(token, jwt.secret || '', (err, decoded) => {
				if (err || !decoded) return reject(err as VerifyErrors);
				resolve(decoded as Decoded);
			});
		}
	);

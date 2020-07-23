import { sign } from 'jsonwebtoken';
import { reduce } from 'lodash';

import { jwt } from '../config';

interface ILogin {
	email: String;
	password: String;
}

export default (user: ILogin) => {
	const token = sign(
		{
			data: reduce(
				user,
				(result: any, value: any, key: string) => {
					if (key !== 'password') result[key] = value;
					return result;
				},
				{}
			),
		},
		jwt.secret || '',
		{
			expiresIn: jwt.expiresIn,
			algorithm: 'HS256',
		}
	);

	return token;
};

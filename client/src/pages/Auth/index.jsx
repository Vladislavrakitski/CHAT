import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm } from '@src/modules';
import { RegisterForm } from '@src/modules';
import './styles.module.scss';

export default () => {
	const onFinish = values => {
		console.log('Received values of form: ', values);
	};

	return (
		<div className='auth'>
			<div className='auth__content'>
				<Route exact path='/'>
					<LoginForm />
				</Route>
				<Route exact path='/register'>
					<RegisterForm />
				</Route>
			</div>
		</div>
	);
};

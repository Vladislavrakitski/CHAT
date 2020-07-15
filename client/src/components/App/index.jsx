import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home } from '@src/pages';

export default () => {
	return (
		<div className='wrapper'>
			<Route exact path='/'>
				<Auth />
			</Route>
			<Route exact path='/im'>
				<Home />
			</Route>
		</div>
	);
};

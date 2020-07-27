import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import '@styles/index.scss';

render(
	// <Provider store={store}>
	<Router>
		<App />
	</Router>,
	// </Provider>,
	document.getElementById('root')
);

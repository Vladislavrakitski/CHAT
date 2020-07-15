import React from 'react';
import { Route } from 'react-router-dom';

import { Message } from '@src/components';
import './styles.module.scss';

export default () => {
	return (
		<div className='home'>
			<Message
				avatar='https://sun2.beltelecom-by-minsk.userapi.com/impg/FVDJxJJ2e-TCr1Dw0MBd-ivU0TYl4jpQzpK6dg/I1_SIEiE1Uc.jpg?size=100x0&quality=90&crop=144,144,1152,1152&sign=25cd9f37222385aed0c0428dbc9a9382&ava=1'
				text='Hey salam!'
				date={new Date(2020, 6, 15, 1, 43, 32)}
				user={{ fullname: 'Cesar' }}
				isMe={false}
			/>
			<Message
				avatar='https://sun9-72.userapi.com/c630620/v630620031/11471/5OuVqffrZRw.jpg?ava=1'
				text='Hey salam! ljsbkhj nsilndf jsnd;f kjnlsdkfjn skdfj nlskjdfn lsdkjfn lsdkjfn lskdjfn lsjkdfn lsjdnf lskjdfn lsjdfn lskjfn lsjhdfb jsduhfln'
				date={new Date(2020, 6, 15, 1, 43, 32)}
				user={{ fullname: 'Cesar' }}
				isMe={true}
			/>
		</div>
	);
};

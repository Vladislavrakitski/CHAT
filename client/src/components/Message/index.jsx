import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { Button as Btn } from 'antd';
import classNames from 'classnames';

import './styles.module.scss';

export default ({ avatar, user, text, date, isMe }) => {
	return (
		<div className={classNames('message', { 'message--isme': isMe })}>
			<div className='message__avatar'>
				<img src={avatar} alt={`Avatar ${user.fullname}`} />
			</div>
			<div className='message__content'>
				<div className='message__bubble'>
					<p className='message__text'>{text}</p>
				</div>
				<span className='message__date'>
					{formatDistanceToNow(date, { addSuffix: true })}
				</span>
			</div>
		</div>
	);
};

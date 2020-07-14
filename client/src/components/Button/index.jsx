import React from 'react';
import { Button as Btn } from 'antd';
import classNames from 'classnames';

import './styles.module.scss';

export default props => {
	return (
		<Btn
			{...props}
			className={classNames('button', props.className, {
				'button--large': props.size === 'large',
			})}
		/>
	);
};

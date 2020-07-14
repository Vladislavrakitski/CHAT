import React from 'react';
import classNames from 'classnames';

import './styles.module.scss';

export default ({ children, className }) => {
	return <div className={classNames('block', className)}>{children}</div>;
};

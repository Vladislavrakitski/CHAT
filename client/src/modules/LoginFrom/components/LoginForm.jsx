import React from 'react';
import { Input, Form } from 'antd';
import { Link } from 'react-router-dom';

import { Btn, Block } from '@src/components';

export default () => {
	return (
		<div>
			<div className='auth__top'>
				<h2>Log in</h2>
				<p>Go to chat :)</p>
			</div>
			<Block>
				<Form
					name='normal_login'
					className='login-form'
					initialValues={{
						remember: true,
					}}
					// onFinish={onFinish}
				>
					<Form.Item
						name='username'
						rules={[
							{
								required: true,
								message: 'Please input your Username!',
							},
						]}>
						<Input type='email' placeholder='Username' size='large' />
					</Form.Item>
					<Form.Item
						name='password'
						rules={[
							{
								required: true,
								message: 'Please input your Password!',
							},
						]}>
						<Input type='password' placeholder='Password' size='large' />
					</Form.Item>
					<Form.Item>
						<Btn
							size='large'
							type='primary'
							htmlType='submit'
							className='button'>
							Log in
						</Btn>
					</Form.Item>
					<Form.Item>
						<Link to='/register' className='auth__register-link'>
							sign up
						</Link>
					</Form.Item>
				</Form>
			</Block>
		</div>
	);
};

import React from 'react';
import { Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import { InfoCircleTwoTone } from '@ant-design/icons';

import { Btn, Block } from '@src/components';

export default () => {
	const success = false;
	return (
		<div>
			<div className='auth__top'>
				<h2>Sign up</h2>
				<p>Sign up and go to chat :)</p>
			</div>
			<Block>
				{!success ? (
					<Form
						name='normal_login'
						className='login-form'
						initialValues={{
							remember: true,
						}}
						// onFinish={onFinish}
					>
						<Form.Item
							name='e-mail'
							rules={[
								{
									required: true,
									message: 'Please input your E-mail!',
								},
							]}>
							<Input type='email' placeholder='E-mail' size='large' />
						</Form.Item>

						<Form.Item
							name='username'
							rules={[
								{
									required: true,
									message: 'Please input your Username!',
								},
							]}>
							<Input placeholder='Username' size='large' />
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

						<Form.Item
							name='confirm'
							rules={[
								{
									required: true,
									message: 'Please confirm your Password!',
								},
							]}>
							<Input
								type='password'
								placeholder='Confirm password'
								size='large'
							/>
						</Form.Item>

						<Form.Item>
							<Btn
								size='large'
								type='primary'
								htmlType='submit'
								className='button'>
								Sign up
							</Btn>
						</Form.Item>
						<Form.Item>
							<Link to='/' className='auth__register-link'>
								Login
							</Link>
						</Form.Item>
					</Form>
				) : (
					<div className='auth__success-block'>
						<InfoCircleTwoTone style={{ fontSize: '50px' }} />
						<h2>Confirm your account!</h2>
						<p>
							A letter was sent to your mail with a link to registration
							confirmation
						</p>
					</div>
				)}
			</Block>
		</div>
	);
};

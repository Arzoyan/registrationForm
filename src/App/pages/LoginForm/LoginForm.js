import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const LoginForm = (props) => {
    const onFinish = (values) => {
        window.localStorage.setItem("token", "just token kjdhglkjasd lagksd jdash fiuaGFIUOagk");
        setTimeout(() => {
            props.history.push("home");
        }, 100);
    };

    return (
        <Form
            name="normal_login"
            className="user-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                className="user-form-item"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                className="user-form-item"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>

                <Link to={"/signup"} >
                    Registration
                    </Link>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
        </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
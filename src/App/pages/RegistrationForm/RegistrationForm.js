import React from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
} from 'antd';
import { message } from 'antd';
import { Link } from 'react-router-dom';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        message.success('registration wos compleated');
    };

    return (
        <Form
            className="user-form"
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label=""
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input placeholder={"E-mail!"} />
            </Form.Item>

            <Form.Item
                name="password"
                label=""
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password placeholder={"your password!"} />
            </Form.Item>

            <Form.Item
                name="confirm"
                label=""
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password placeholder={"confirm your password"} />
            </Form.Item>
            <Form.Item
                name="name"
                label=""
                rules={[
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                ]}
            >
                <Input placeholder={"name"} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Link to={"/login"} >
                    <Button >
                        login
        </Button>
                </Link>
                <Button type="primary" htmlType="submit">
                    Register
        </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;
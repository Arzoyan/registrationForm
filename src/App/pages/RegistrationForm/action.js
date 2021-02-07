import types from "./actionTypes";
import 'antd/dist/antd.css';
import './index.css';
import { message } from 'antd';

export const registrationUser = (payload) => {
    return { type: types.REGISTRATION_USER, payload }
}
export const registrationUserSuccess = (payload) => {
    message.success('');
    return { type: types.REGISTRATION_USER_SUCCESS, payload }
}
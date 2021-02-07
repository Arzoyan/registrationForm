import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import actionTypes from "./actionTypes";

function* registration({payload}) {
    try {
        yield delay(1000);
        yield put(actions.registrationUserSuccess(payload));

    } catch (e) {
        yield put({ type: "REQ_FAILD", message: e.message });
    }
}




function* homeSaga() {
    yield takeLatest(actionTypes.REGISTRATION_USER, registration);
}

export default homeSaga;
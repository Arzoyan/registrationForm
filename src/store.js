import { createStore, applyMiddleware } from "redux";
import rootReducer from "./App/services/rootReducer";
import logger from 'redux-logger';
import rootSaga from "./App/services/rootSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddlewar = createSagaMiddleware();
const middlewares = [logger, sagaMiddlewar];


const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddlewar.run(rootSaga);

export default store;
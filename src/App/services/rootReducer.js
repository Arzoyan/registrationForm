import { combineReducers } from "redux";

//---- import all reducers ---------------------------------
import UsersStore from './UsersStore/UsersStore';


// .. combain all reducers
const rootReducer = combineReducers({
    // home,
    UsersStore,
})

export default  rootReducer;

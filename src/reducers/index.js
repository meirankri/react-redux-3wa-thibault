import { combineReducers } from "redux";
import UserReducer from './userReducer';

//combine les reducers
const rootReducer = combineReducers({
    user: UserReducer
});

export default rootReducer;
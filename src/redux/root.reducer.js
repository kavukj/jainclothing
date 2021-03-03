import { combineReducers } from 'redux';
import userReducer from '../redux/users/user.reducer';

export default combineReducers({
    user:userReducer
});
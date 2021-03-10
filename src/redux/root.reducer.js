import { combineReducers } from 'redux';
import userReducer from '../redux/users/user.reducer';
import cartReducer from '../redux/cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig =   {
    key : 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer
});

export default persistReducer(persistConfig,rootReducer);

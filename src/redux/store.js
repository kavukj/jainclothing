import { createStore , applyMiddleware } from 'redux';
import rootReducer from '../redux/root.reducer';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

const middlewares = [];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store =  createStore(rootReducer,applyMiddleware(...middlewares));

//persistor is a persisted version of our store
export const persistor = persistStore(store);

// eslint-disable-next-line
export default { persistor, store };

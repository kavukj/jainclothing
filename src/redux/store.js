import { createStore , applyMiddleware } from 'redux';
import rootReducer from '../redux/root.reducer';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const store =  createStore(rootReducer,applyMiddleware(...middlewares));

//persistor is a persisted version of our store
export const persistor = persistStore(store);

export default { persistor, store };

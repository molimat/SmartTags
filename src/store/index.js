import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { rootReducer } from './reducers/index';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0,
}

const sagaMiddleware =  createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export {store, persistor}

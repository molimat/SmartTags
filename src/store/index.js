import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, purgeStoredState } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { rootReducer } from './reducers/index';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

import { composeWithDevTools } from 'remote-redux-devtools';

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0,
}

//purgeStoredState(persistConfig); // to purge actual data

const sagaMiddleware =  createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = composeWithDevTools({ realtime: true});
const store = createStore(persistedReducer, 
                  composeEnhancers(applyMiddleware(sagaMiddleware)
              // algum outro enhancer aqui
              )
      )
                            
const persistor = persistStore(store)


sagaMiddleware.run(rootSaga)


export {store, persistor}

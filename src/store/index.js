import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, purgeStoredState, BOOTSTRAPPED} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { rootReducer } from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootSaga from './sagas'

import { composeWithDevTools } from 'remote-redux-devtools';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, //vai garantir que os estados sejam armazenados até seu segundo level
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
                            
const persistor = persistStore(store, {}, () => {
  store.dispatch({ type: BOOTSTRAPPED })
})


sagaMiddleware.run(rootSaga)

export function getPersistor() {
  return persistor;
}

export {store, persistor}

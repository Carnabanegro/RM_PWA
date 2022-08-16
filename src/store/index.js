import {applyMiddleware, createStore} from 'redux';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import saga from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';
import {persistReducer, persistStore} from "redux-persist";
import {composeWithDevTools} from "@redux-devtools/extension";

function loadAsyncState(store,persistor) {
    return {store,persistor};
}

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const sagaMiddleware = saga();

const Store = () => {

    const sagaMiddleware = createSagaMiddleware();
    const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))
    const store = createStore(persistedReducer, enhancer);
    let persistor = persistStore(store)

    sagaMiddleware.run(sagas);
    return loadAsyncState(store,persistor);

};

export default Store;


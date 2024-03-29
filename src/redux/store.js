import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createReducer from "./redusers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "./sagas";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage:storage,
};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, createReducer());

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor, history };
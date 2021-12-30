import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
// import rootSaga from "./root-saga";

export const initialState = {};
// const sagaMonitor =
//   process.env.NODE_ENV === "development"
//     ? console.tron.createSagaMonitor()
//     : null;
const sagaMiddleware = createSagaMiddleware({
  // sagaMonitor,
});

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

const enhancer =
  process.env.NODE_ENV === "development"
    ? compose(
        // console.tron.createEnhancer(),
        applyMiddleware(
          sagaMiddleware,
          logger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : null
      )
    : applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, initialState, enhancer);
// sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
const ex = { store, persistStore };
export default ex;

import { compose } from "redux";
import {rootReducer, rootSaga} from "./rootReducer";
import {createStore,applyMiddleware} from "redux"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer);


 export default store;
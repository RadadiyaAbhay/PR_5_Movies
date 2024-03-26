import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./services/reducers";
import { thunk } from "redux-thunk";
import {compose} from "redux";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer ,  composeEnhancers(applyMiddleware(thunk)))
import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export  const store = createStore(
    reducer,
    window.devToolsExtension && window.devToolsExtension(),
    composeEnhancer(applyMiddleware(thunk))
    );




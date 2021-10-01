import {createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import { reducers } from './Reducers';
//import logger from 'redux-logger';
 const store=createStore(
    reducers,
     compose(applyMiddleware(thunk)
     )
)
export default store;
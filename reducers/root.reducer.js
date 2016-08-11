import { combineReducers } from "redux"
import counter from './counter.reducers.js'

const rootReducer = combineReducers({
    counter
});

module.exports = rootReducer;

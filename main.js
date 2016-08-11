import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from "redux";
import {Provider, connect} from "react-redux";
import rootReducer from "./reducers/root.reducer.js";  //combine to root reducer
import rootMiddleware from "./middleware/root.middleware.js";
import {Router, Route, Link, browserHistory, IndexRoute, hashHistory, Redirect} from 'react-router';

import Testing from './components/testing/Testing.js'

const store = createStore(rootReducer, {
    counter: 2,
    user: {},
    courses: {
        allTests: []
    },
    finishTest: {
        tests:[]
    },
    rating: ''
}, applyMiddleware(rootMiddleware));


var Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/'>
                <IndexRoute component={Navigate}/>
                    <Route path='test' component={MainTestPage}/>
            </Route>
        </Router>
    </Provider>);

ReactDOM.render(Routes, document.getElementById('app'));
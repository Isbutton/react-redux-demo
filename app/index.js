/**
 * Created by qitmac000068 on 2017/7/7.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {Route,IndexRoute,browserHistory,Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import AllMemosRoute from './routes/AllMemosRoute';
import TodoRoute from './routes/TodoRoute';
import DoingRoute from './routes/DoingRoute';
import DoneRoute from './routes/DoneRoute';
import configureStore from './stores';
import './index.scss';
const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={AllMemosRoute}/>
                <Route path="/todo" component={TodoRoute}/>
                <Route path="/doing" component={DoingRoute}/>
                <Route path="/done" component={DoneRoute}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector("#root")
);
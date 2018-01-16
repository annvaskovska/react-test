import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadCourses} from './redux/actions/courseActions';
import {loadAuthors} from './redux/actions/authorActions';
import {loadTree} from './redux/actions/treeActions';
import './assets/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadTree());
render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

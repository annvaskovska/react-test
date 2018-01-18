import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './redux/actions/courseActions';
import {loadAuthors} from './redux/actions/authorActions';
import {loadTree} from './redux/actions/treeActions';
import './assets/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import App from './app/components/App';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadTree());
render (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

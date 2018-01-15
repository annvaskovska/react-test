import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReduxer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallInProgress
});


export default rootReducer;

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReduxer';
import applications from './treeReducer';
import dictionaries from './dictionariesReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  applications,
  ajaxCallInProgress,
  dictionaries
});


export default rootReducer;

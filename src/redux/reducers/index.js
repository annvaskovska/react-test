import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReduxer';
import tree from './treeReducer';
import dictionaries from './dictionariesReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  tree,
  ajaxCallInProgress,
  dictionaries
});


export default rootReducer;

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReduxer';
import tree from './treeReducer';

import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  tree,
  ajaxCallInProgress
});


export default rootReducer;

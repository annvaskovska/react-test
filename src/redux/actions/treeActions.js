import * as types from './actionTypes';
import treeApi from '../../api/mockTreeApi';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export function loadTreeSuccess(tree) {
  return {
    type: types.LOAD_TREE_SUCCESS,
    tree
  };
}

export function selectNode(node) {
  return {
    type: types.SELECT_NODE_SUCCESS,
    node
  };
}

export function loadTree() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return treeApi.getTree().then(courses => {
      dispatch(loadTreeSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

// export function selectNode() {
//   return function (dispatch) {
//     return treeApi.getTree().then(courses => {
//       dispatch(loadTreeSuccess(courses));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

import * as types from './actionTypes';
import treeApi from '../../api/mockTreeApi';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

export function loadTreeSuccess (tree) {
  return {
    type: types.LOAD_TREE_SUCCESS,
    tree
  };
}

export function loadTree () {
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

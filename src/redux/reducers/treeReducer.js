import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function treeReducer (state = initialState.tree, action) {
  switch (action.type) {
    case types.LOAD_TREE_SUCCESS:
      return action.tree;

    default:
      return state;
  }
}

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function treeReducer (state = initialState.applications, action) {
  switch (action.type) {
    case types.LOAD_TREE_SUCCESS:
      return {
        selectedNode: state.selectedNode,
        tree: action.tree
      };
    case types.SELECT_NODE_SUCCESS:
      return {
        selectedNode: action.node,
        tree: state.tree
      };
    case types.SAVE_NODE_SUCCESS:
      return {
        selectedNode: action.node,
        tree: [ ...state.tree, Object.assign({}, action.node) ]
      };

    default:
      return state;
  }
}

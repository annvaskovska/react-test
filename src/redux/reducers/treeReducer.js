import _ from 'lodash';
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
        tree: [ ...insert(state.tree, action.node) ]
      };

    default:
      return state;
  }
}

function insert (stateTree, node) {
  const tree = _.cloneDeep(stateTree);
  const parentNodeIndex = _.findIndex(tree, {name: node.parentName});
  tree.splice(parentNodeIndex + 1, 0, node);
  return tree;
}

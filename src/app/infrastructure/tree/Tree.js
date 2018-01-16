import React, {PropTypes} from 'react';
import TreeNode from './TreeNode';

const Tree = ({treeModel}) => {
  return (
    <div>
      {
        treeModel.map(node => <TreeNode key={node.id} node={node}/>)
      }
    </div>
  );
};

Tree.propTypes = {
  treeModel: PropTypes.array.isRequired
};

export default Tree;

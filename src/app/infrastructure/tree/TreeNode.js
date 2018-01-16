import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TreeNode = ({node}) => {
  return (
   <div>
     <Link to={'/applications/' + node.id}>{node.name}</Link>
   </div>
  );
};

TreeNode.propTypes = {
  node: PropTypes.object.isRequired
};

export default TreeNode;

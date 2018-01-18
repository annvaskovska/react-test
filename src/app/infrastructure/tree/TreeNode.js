import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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

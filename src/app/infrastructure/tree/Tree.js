import React from 'react';
import PropTypes from 'prop-types';
//import TreeNode from './TreeNode';
import {Link} from 'react-router-dom';

const Tree = ({treeModel, onSelect}) => {
  return (
    <div>
      {
        treeModel.map((node) => {
          return (
            <div key={node.id}>
              <Link to={'/applications/' + node.id} onClick={onSelect.bind(null, node)}>{node.name}</Link>
            </div>
          );
        })
      }
    </div>
  );
};

Tree.propTypes = {
  treeModel: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

export default Tree;

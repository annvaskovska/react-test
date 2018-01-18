import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Tree = ({treeModel, onSelect}) => {
  return (
    <div>
      {
        treeModel.map((node) => {
          return (
            <h4 key={node.id} style={{paddingLeft: node.level * 8}}>
              <Link to={'/applications/' + node.id} onClick={onSelect.bind(null, node)}>{node.name}</Link>
            </h4>
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

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Tree = ({treeModel, onSelect}) => {
  return (
    <div>
      {
        treeModel.map((node) => {
          return (
            <h5 key={node.id} style={{paddingLeft: node.level * 8}}>
              {node.level ==1 && <span className="glyphicon glyphicon-equalizer ico"></span>}
              {node.level ==2 && <span className="glyphicon glyphicon-tasks ico"></span>}
              {node.level == 3 && <span className="glyphicon glyphicon-trash ico"></span>}
              <Link to={'/applications/' + node.id} onClick={onSelect.bind(null, node)}>{node.name}</Link>
            </h5>
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

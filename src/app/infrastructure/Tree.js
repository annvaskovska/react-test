import {Link} from 'react-router-dom';

const Tree = ({treeModel, onSelect}) => {
  return (
    <div>
      {
        treeModel.map((node) => {
          return (
            <h5 key={node.id} style={{paddingLeft: node.level * 8}}>
              {node.level ==1 && <span className="glyphicon glyphicon-equalizer ico"/>}
              {node.level ==2 && <span className="glyphicon glyphicon-tasks ico"/>}
              {node.level == 3 && <span className="glyphicon glyphicon-trash ico"/>}
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

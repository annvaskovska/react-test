import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Switch, Route, Link, withRouter} from 'react-router-dom';
import CreateNode from './CreateNode';
import BucketSettings from './BucketSettings';
import * as treeActions from '../../../redux/actions/treeActions';

import Tree from '../../infrastructure/Tree';

import toastr from 'toastr';
import Backups from './Backups';

class NodeContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nodeInfo: Object.assign({}, this.props.nodeInfo)
    };

    this.onSave = this.onSave.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.nodeInfo.id !== nextProps.nodeInfo.id) {
      this.setState({nodeInfo: Object.assign({}, nextProps.nodeInfo)});
    }
  }

  onSelect(node) {
    this.props.actions.selectNode(node);
  }

  onSave(nodeName) {
    this.props.actions.saveNode({
      name: nodeName,
      level: this.state.nodeInfo.level,
      parentName: this.state.nodeInfo.name,
      parentLevel: this.state.nodeInfo.level
    })
      .then(() => {
        toastr.success('Successfully Saved');
        this.context.router.history.goBack();
      });
  }

  updateSettings() {
    toastr.success('Successfully Updated');
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-5">
            <h5>
              {this.props.nodeInfo.level == 1 && <span className="glyphicon glyphicon-equalizer ico"></span>}
              {this.props.nodeInfo.level == 2 && <span className="glyphicon glyphicon-tasks ico"></span>}
              {this.props.nodeInfo.level == 3 && <span className="glyphicon glyphicon-trash ico"></span>}
              <strong>{this.props.nodeInfo.name}</strong>
            </h5>
          </div>
          <div className="col-md-7">
            {this.props.nodeInfo.level === "2" && <Link to={`${this.props.match.url}/create-bucket`}
                                                        className="btn btn-primary btn-sm pull-right">
              Create Bucket
            </Link>}
            {this.props.nodeInfo.level === "1" && <Link to={`${this.props.match.url}/create-node`}
                                                        className="btn btn-primary btn-sm pull-right">
              Create Node
            </Link>}
            {this.props.nodeInfo.level === "3" && <Link to={`${this.props.match.url}/bucket-settings`}
                                                        className="btn btn-primary btn-sm pull-right">
              Settings
            </Link>}
          </div>
        </div>

        <div>
          <Switch>
            <Route exact path={`${this.props.match.url}`} render={() => {
              return this.props.nodeInfo.level === "3"
                ? <Backups/>
                : <Tree treeModel={getChildren(this.props.nodeInfo, this.props.tree, true)} onSelect={this.onSelect}/>;
            }}/>
            <Route path={`${this.props.match.url}/create-bucket`} render={(props) =>
              <CreateNode
                nodeType={'BUCKET'}
                onSave={this.onSave}
                nodeInfo={this.state.nodeInfo}
                history={props.history}/>
            }/>
            <Route path={`${this.props.match.url}/create-node`} render={(props) =>
              <CreateNode
                nodeType={'NODE'}
                onSave={this.onSave}
                nodeInfo={this.state.nodeInfo}
                history={props.history}/>
            }/>
            <Route path={`${this.props.match.url}/bucket-settings`} render={(props) =>
              <BucketSettings
                onSave={this.updateSettings}
                nodeInfo={this.state.nodeInfo}
                history={props.history}/>
            }/>
          </Switch>
        </div>
      </div>
    );
  }
}

NodeContent.propTypes = {
  match: PropTypes.object,
  nodeInfo: PropTypes.object,
  tree: PropTypes.array.isRequired,
  actions: PropTypes.object
};

NodeContent.contextTypes = {
  router: PropTypes.object
};

function getChildren(levelData, treeData, recursive = false) {
  if (!levelData) {
    return [];
  }

  const options = _.pickBy({id: levelData.id, type: levelData.type, path: levelData.path, label: levelData.label});
  let levelIndex = _.findIndex(treeData, options) + 1;

  const children = [];
  while (levelIndex < treeData.length && treeData[levelIndex].level > levelData.level) {
    if (recursive || _.isEqual(_.toNumber(treeData[levelIndex].level), _.toNumber(levelData.level) + 1)) {
      children.push(treeData[levelIndex]);
    }
    levelIndex++;
  }
  return children;
}

function mapStateToProps(state, ownProps) {
  const selectedNodeId = ownProps.match.params.id;
  let selectedNode = state.applications.selectedNode;

  if (_.isEmpty(selectedNode) && !_.isEmpty(selectedNodeId) && state.applications.tree.length > 0) {
    selectedNode = _.find(state.applications.tree, {id: selectedNodeId});
  }

  return {
    nodeInfo: selectedNode,
    tree: state.applications.tree
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(treeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NodeContent));

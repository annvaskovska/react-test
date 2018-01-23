import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Link, withRouter} from 'react-router-dom';
import CreateNode from './CreateNode';
import BucketSettings from './BucketSettings';
import * as treeActions from '../../../redux/actions/treeActions';
import _ from 'lodash';

import toastr from 'toastr';
import Backups from './Backups';

class NodeContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nodeInfo: Object.assign({}, this.props.nodeInfo)
    };

    this.onSave = this.onSave.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.nodeInfo.id !== nextProps.nodeInfo.id) {
      this.setState({nodeInfo: Object.assign({}, nextProps.nodeInfo)});
    }
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
        <div className="row">
          {
            this.props.nodeInfo.level == 3 && <Backups/>
          }
        </div>

        <div>
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
        </div>
      </div>
    );
  }
}

NodeContent.propTypes = {
  match: PropTypes.object,
  nodeInfo: PropTypes.object,
  actions: PropTypes.object
};

NodeContent.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const selectedNodeId = ownProps.match.params.id;
  let selectedNode = state.tree.selectedNode;

  if (_.isEmpty(selectedNode) && !_.isEmpty(selectedNodeId) && state.tree.tree.length > 0) {
    selectedNode = _.find(state.tree.tree, {id: selectedNodeId});
  }

  return {
    nodeInfo: selectedNode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(treeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NodeContent));

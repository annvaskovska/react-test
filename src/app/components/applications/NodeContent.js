import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Link, withRouter} from 'react-router-dom';
import CreateNode from './CreateNode';
import * as treeActions from '../../../redux/actions/treeActions';
import _ from 'lodash';

class NodeContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nodeInfo: Object.assign({}, this.props.nodeInfo)
    };

    this.onSave = this.onSave.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.nodeInfo.id !== nextProps.nodeInfo.id) {
      this.setState({nodeInfo: Object.assign({}, nextProps.nodeInfo)});
    }
  }

  onSave (nodeName) {
    this.props.actions.saveNode({
      name: nodeName,
      level: this.state.nodeInfo.level,
      parentName: this.state.nodeInfo.name,
      parentLevel: this.state.nodeInfo.level
    })
      .then(() => {
        this.context.router.history.goBack();
      });
  }

  updateCourseState (event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-5">
            <h4><b>{this.props.nodeInfo.name}</b></h4>
          </div>
          <div className="col-md-7">
              <Link to={`${this.props.match.url}/create-bucket`}
                    className="btn btn-primary btn-sm pull-right"
                    disabled={this.props.nodeInfo.level != 2}>
                Create Bucket
              </Link>
              <Link to={`${this.props.match.url}/create-node`}
                    className="btn btn-primary btn-sm pull-right"
                    disabled={this.props.nodeInfo.level > 1}>
                Create Node
              </Link>
          </div>

        </div>

        <div>
          <Route path={`${this.props.match.url}/create-bucket`} render={(props) =>
            <CreateNode
              nodeType={'BUCKET'}
              onSave={this.onSave}
              onChange={this.updateCourseState}
              nodeInfo={this.state.nodeInfo}
              history={props.history}/>
          }/>
          <Route path={`${this.props.match.url}/create-node`} render={(props) =>
            <CreateNode
              nodeType={'NODE'}
              onSave={this.onSave}
              onChange={this.updateCourseState}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(NodeContent));

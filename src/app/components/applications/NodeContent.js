import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Link, withRouter} from 'react-router-dom';
import CreateNode from './CreateNode';
import CreateBucket from './CreateBucket';
import * as treeActions from '../../../redux/actions/treeActions';

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
    this.props.actions.saveNode({name: nodeName})
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
        <p>{this.state.nodeInfo.name}</p>
        <Link to={`${this.props.match.url}/create-bucket`}>Create Bucket</Link>
        <Link to={`${this.props.match.url}/create-node`}>Create Node</Link>
        <div>
          <Route path={`${this.props.match.url}/create-bucket`} component={CreateBucket}/>
          <Route path={`${this.props.match.url}/create-node`} render={(props) =>
            <CreateNode
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
  return {
    nodeInfo: state.tree.selectedNode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(treeActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(NodeContent));

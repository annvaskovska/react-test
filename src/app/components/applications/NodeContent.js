import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class NodeContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nodeInfo: Object.assign({}, this.props.nodeInfo)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.nodeInfo.id !== nextProps.nodeInfo.id) {
      this.setState({nodeInfo: Object.assign({}, nextProps.nodeInfo)});
    }
  }

  render() {
    return (
      <p>{this.state.nodeInfo.name}</p>
    );
  }
}

NodeContent.propTypes = {
  nodeInfo: PropTypes.object
};

NodeContent.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    nodeInfo: state.tree.selectedNode
  };
}
export default connect(mapStateToProps)(NodeContent);

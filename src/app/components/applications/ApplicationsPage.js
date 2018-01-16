import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Tree from '../../infrastructure/tree/Tree';

class ApplicationsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <aside>
        <Tree treeModel={this.props.tree}/>
      </aside>
    );
  }
}

ApplicationsPage.propTypes = {
  tree: PropTypes.array.isRequired
};

function mapStateToProps (state, ownProps) {
  return {
    tree: state.tree
  };
}

export default connect(mapStateToProps)(ApplicationsPage);

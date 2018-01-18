import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tree from '../../infrastructure/tree/Tree';
import NodeContent from './NodeContent';
import {bindActionCreators} from 'redux';
import * as treeActions from '../../../redux/actions/treeActions';
import {Route} from 'react-router-dom';

class ApplicationsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect (node) {
    this.props.actions.selectNode(node);
  }

  render() {
    return (
      <div>
        <aside>
          <Tree treeModel={this.props.tree} onSelect={this.onSelect}/>
        </aside>
        <section>
          <Route path={`applications/:id`} component={NodeContent}/>
        </section>
      </div>
    );
  }
}

ApplicationsPage.propTypes = {
  match: PropTypes.object,
  actions: PropTypes.object.isRequired,
  tree: PropTypes.array.isRequired
};

//TODO: state.tree.tree WTF
function mapStateToProps(state, ownProps) {
  return {
    tree: state.tree.tree
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(treeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsPage);

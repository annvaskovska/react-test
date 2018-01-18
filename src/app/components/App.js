import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Main from './Main';
import {connect} from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        <Main/>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps (state) {
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);

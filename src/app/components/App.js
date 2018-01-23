import Header from './common/Header';
import Main from './Main';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps)(App));

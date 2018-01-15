import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coursesActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage () {
    browserHistory.push('/course');
  }

  render () {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          className="btn btn-primary"
          value="Add Course"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(coursesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

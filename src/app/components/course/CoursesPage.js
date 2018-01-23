import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coursesActions from '../../../redux/actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router-dom';

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

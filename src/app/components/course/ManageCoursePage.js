import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coursesActions from '../../../redux/actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState (event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse (event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect () {
    toastr.success('Course saved');
    this.setState({saving: false});
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          onSave={this.saveCourse}
          onChange={this.updateCourseState}
          saving={this.state.saving}
          errors={this.state.errors}/>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById (courses, courseId) {
  const course = courses.filter((course) => course.id === courseId);
  if (course.length) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;

  let course = {
    watchHref: '',
    id: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorFormattedForDropdown = state.authors.map((author) => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coursesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

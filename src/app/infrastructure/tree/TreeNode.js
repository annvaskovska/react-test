import React, {PropTypes} from 'react';
//import {Link} from 'react-router';
//<td><Link to={'/course/' + course.id}>{course.title}</Link></td>

const CourseListRow = ({node}) => {
  return (
   <div>
     {node.name}
   </div>
  );
};

CourseListRow.propTypes = {
  node: PropTypes.object.isRequired
};

export default CourseListRow;

import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tree = [
  {
    id: "1",
    isLeaf: "false",
    level: "1",
    name: "Production Application"
  },
  {
    id: "2",
    isLeaf: "false",
    level: "2",
    name: "Web Server 1"
  },
  {
    id: "3",
    isLeaf: "true",
    level: "3",
    name: "WS1001"
  },
  {
    id: "4",
    isLeaf: "true",
    level: "3",
    name: "WS1002"
  },
  {
    id: "5",
    isLeaf: "false",
    level: "2",
    name: "Web Server 2"
  },
  {
    id: "6",
    isLeaf: "true",
    level: "3",
    name: "WS2001"
  },
  {
    id: "7",
    isLeaf: "true",
    level: "3",
    name: "WS2002"
  },
  {
    id: "8",
    isLeaf: "false",
    level: "2",
    name: "Database (backup)"
  },
  {
    id: "9",
    isLeaf: "true",
    level: "3",
    name: "S3-DB blabla"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class TreeApi {
  static getTree() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tree));
      }, delay);
    });
  }

  // static saveCourse(course) {
  //   course = Object.assign({}, course); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minCourseTitleLength = 1;
  //       if (course.title.length < minCourseTitleLength) {
  //         reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //       }
  //
  //       if (course.id) {
  //         const existingCourseIndex = courses.findIndex(a => a.id == course.id);
  //         courses.splice(existingCourseIndex, 1, course);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids and watchHref's for new courses in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         course.id = generateId(course);
  //         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //         courses.push(course);
  //       }
  //
  //       resolve(course);
  //     }, delay);
  //   });
  // }
  //
  // static deleteCourse(courseId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfCourseToDelete = courses.findIndex(course => {
  //         course.id == courseId;
  //       });
  //       courses.splice(indexOfCourseToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default TreeApi;

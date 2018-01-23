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
    name: "WS1001",
    frequencyId: "1",
    dataCenterId: "2",
    retentionTimeId: "3",
    encriptionId: "1"
  },
  {
    id: "4",
    isLeaf: "true",
    level: "3",
    name: "WS1002",
    frequencyId: "1",
    dataCenterId: "2",
    retentionTimeId: "3",
    encriptionId: "1"
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
    name: "WS2001",
    frequencyId: "1",
    dataCenterId: "2",
    retentionTimeId: "3",
    encriptionId: "1"
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
    name: "S3-DB blabla",
    frequencyId: "1",
    dataCenterId: "2",
    retentionTimeId: "3",
    encriptionId: "1"
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

  static saveNode(node) {
    node = Object.assign({}, node); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (node.name.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (node.id) {
          const existingCourseIndex = tree.findIndex(a => a.id == node.id);
          tree.splice(existingCourseIndex, 1, node);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new tree in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          node.id = _.random(1000).toString();
          node.level = Number(node.parentLevel) + 1;

          if (node.level === 3) {
            Object.assign(node, {
              frequencyId: "1",
              dataCenterId: "2",
              retentionTimeId: "3",
              encriptionId: "1"
            });
          }

          tree.push(node);
        }

        resolve(node);
      }, delay);
    });
  }

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

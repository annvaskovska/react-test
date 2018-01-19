import delay from './delay';

const frequency = [
  {
    id: "1",
    name: "Hourly"
  },
  {
    id: "2",
    name: "Daily"
  },
  {
    id: "3",
    name: "Monthly"
  },
  {
    id: "4",
    name: "Yearly"
  }
];

class DictionariesApi {
  static getFrequency() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], frequency));
      }, delay);
    });
  }
}

export default DictionariesApi;

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

const dataCenters = [
  {
    id: "1",
    name: "Data Center 1"
  },
  {
    id: "2",
    name: "Data Center 2"
  },
  {
    id: "3",
    name: "Data Center 3"
  },
  {
    id: "4",
    name: "Data Center 4"
  },
  {
    id: "5",
    name: "Data Center 5"
  },
  {
    id: "6",
    name: "Data Center 6"
  },
  {
    id: "7",
    name: "Data Center 7"
  },
  {
    id: "8",
    name: "Data Center 8"
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

  static getDataCenters() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], dataCenters));
      }, delay);
    });
  }
}

export default DictionariesApi;

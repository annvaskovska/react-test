import TableList from '../../infrastructure/Table/TableList';

//import PropTypes from 'prop-types';

class Backups extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};

    this.backups = [
      {
        id: 1,
        backupDate: new Date().toDateString(),
        createdAgo: 13,
        objectsCount: 234,
        size: 4
      },
      {
        id: 2,
        backupDate: new Date().toDateString(),
        createdAgo: 13,
        objectsCount: 656,
        size: 34
      },
      {
        id: 3,
        backupDate: new Date().toDateString(),
        createdAgo: 13,
        objectsCount: 4567,
        size: 64
      },
      {
        id: 4,
        backupDate: new Date().toDateString(),
        createdAgo: 13,
        objectsCount: 457,
        size: 334
      }
    ];

    this.columns = ['backupDate', 'createdAgo', 'objectsCount', 'size'];
    this.headers = ['Backups', 'Created', 'Objects', 'Size'];
  }

  render() {
    return (
      <TableList columns={this.columns} headers={this.headers} rows={this.backups}/>
    );
  }
}

Backups.propTypes = {};


export default Backups;

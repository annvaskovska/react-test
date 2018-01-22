import React from 'react';
import PropTypes from 'prop-types';
import TabletRow from './TableRow';

const TableList = ({rows, columns, headers}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        {
          headers.map(header => <th key={header}>{header}</th>)
        }
      </tr>
      </thead>
      <tbody>
      {
        rows.map(row => <TabletRow key={row.id} row={row} columns={columns}/>)
      }
      </tbody>
    </table>
  );
};

TableList.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};

export default TableList;


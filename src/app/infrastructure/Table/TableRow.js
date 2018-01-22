import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({row, columns}) => {
  return (
    <tr>
      {
        columns.map(column => <td key={row.id}>{row[column]}</td>)
      }
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default TableRow;

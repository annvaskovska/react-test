import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({row, columns}) => {
  return (
    <tr>
      {
        columns.map(column => <td key={`${row.id}-${_.random(12445645)}`}>{row[column]}</td>)
      }
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
};

export default TableRow;

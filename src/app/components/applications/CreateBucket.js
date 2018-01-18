import React from 'react';
import PropTypes from 'prop-types';

const CreateBucket = ({parentNode, match}) => {
  return (
    <div>
      <div>{parentNode}</div>
      <div>{match.url}</div>
    </div>
  );
};


CreateBucket.propTypes = {
  match: PropTypes.object,
  parentNode: PropTypes.object
};

export default CreateBucket;

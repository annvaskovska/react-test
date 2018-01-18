import React from 'react';
import PropTypes from 'prop-types';

const CreateNode = ({parentNode}) => {
    return (
      <div>
        <div>{parentNode}</div>
        <div>BLA BLA BLA BLA BLA BLA BLA BLA BLA</div>
      </div>
    );
};


CreateNode.propTypes = {
  parentNode: PropTypes.object
};

export default CreateNode;

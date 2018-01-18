import React, { PropTypes} from 'react';
import { Link } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <Link to="/">Applications</Link>
      <Link to="/monitoring">Monitoring</Link>
      <Link to="/reporting">Reporting</Link>
      <Link to="/unmanaged-buckets">Unmanaged Buckets</Link>
      <Link to="/settings">Settings</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

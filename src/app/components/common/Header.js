import React, { PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Applications</IndexLink>
      {" | "}
      <Link to="/monitoring" activeClassName="active">Monitoring</Link>
      {" | "}
      <Link to="/reporting" activeClassName="active">Reporting</Link>
      {" | "}
      <Link to="/unmanaged-buckets" activeClassName="active">Unmanaged Buckets</Link>
      {" | "}
      <Link to="/settings" activeClassName="active">Settings</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;

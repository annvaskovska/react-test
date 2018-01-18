import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ApplicationsPage from './applications/ApplicationsPage';
import MonitoringPage from './monitoring/MonitoringPage';
import ReportingPage from './reporting/ReportingPage';
import UnmanagedBuckets from './unmanaged-buckets/UnmanagedBuckets';
import SettingsPage from './settings/SettingsPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ApplicationsPage}/>
      <Route path="/monitoring" component={MonitoringPage}/>
      <Route path="/reporting" component={ReportingPage}/>
      <Route path="/unmanaged-buckets" component={UnmanagedBuckets}/>
      <Route path="/settings" component={SettingsPage}/>
    </Switch>
  </main>
);

export default Main;

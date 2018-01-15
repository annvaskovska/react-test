import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './conponents/App';
import AboutPage from './conponents/about/AboutPage';
import CoursesPage from './conponents/course/CoursesPage';
import ManageCoursePage from './conponents/course/ManageCoursePage';
import ApplicationsPage from './conponents/applications/ApplicationsPage';
import MonitoringPage from './conponents/monitoring/MonitoringPage';
import ReportingPage from './conponents/reporting/ReportingPage';
import UnmanagedBuckets from './conponents/unmanaged-buckets/UnmanagedBuckets';
import SettingsPage from './conponents/settings/SettingsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ApplicationsPage}/>
    <Route path="applications" component={ApplicationsPage}/>
    <Route path="monitoring" component={MonitoringPage}/>
    <Route path="reporting" component={ReportingPage}/>
    <Route path="unmanaged-buckets" component={UnmanagedBuckets}/>
    <Route path="settings" component={SettingsPage}/>

    <Route path="courses" component={CoursesPage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);



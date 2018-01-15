import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/components/App';
import AboutPage from './app/components/about/AboutPage';
import CoursesPage from './app/components/course/CoursesPage';
import ManageCoursePage from './app/components/course/ManageCoursePage';
import ApplicationsPage from './app/components/applications/ApplicationsPage';
import MonitoringPage from './app/components/monitoring/MonitoringPage';
import ReportingPage from './app/components/reporting/ReportingPage';
import UnmanagedBuckets from './app/components/unmanaged-buckets/UnmanagedBuckets';
import SettingsPage from './app/components/settings/SettingsPage';

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



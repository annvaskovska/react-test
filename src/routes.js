import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ApplicationsPage from './components/applications/ApplicationsPage';
import MonitoringPage from './components/monitoring/MonitoringPage';
import ReportingPage from './components/reporting/ReportingPage';
import UnmanagedBuckets from './components/unmanaged-buckets/UnmanagedBuckets';
import SettingsPage from './components/settings/SettingsPage';

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



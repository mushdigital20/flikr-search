import angular from 'angular';
import 'angular-ui-router';

// angular modules
import constants from './constants';
import onConfig  from './config/on_config';
import onRun     from './config/on_run';
import './templates';
import './filters';
import './pages';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.pages',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

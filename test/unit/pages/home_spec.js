/*global angular */

'use strict';

describe('Unit: HomeController', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(function($controller) {
      ctrl = $controller('HomeController');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

});
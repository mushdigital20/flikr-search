/*global angular */

'use strict';

describe('Unit: FlickrService', function() {

  var http, service;
  
  var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=';

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(function($httpBackend, FlickrService) {
      http = $httpBackend;
      service = FlickrService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

  it('should retrieve data', function(done) {
    http.expectJSONP(url).respond(201, {data: 1234});

    service.getData('').then(function(result) {
      expect(result.data).toEqual({data: 1234});
    }, function(error) {
      expect(error).toBeUndefined();
    }).then(done);

    http.flush();
  });
});


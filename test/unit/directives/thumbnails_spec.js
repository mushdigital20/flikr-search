/*global angular, module, browser*/

'use strict';

describe('Unit: ThumbnailsDirective', function() {

  var element, scope;

  beforeEach(function() {
    spyOn(window, 'alert');
    angular.mock.module('app');

    angular.mock.inject(function($compile, $rootScope) {
      scope = $rootScope;
      element = angular.element('<thumbnails list="data"></thumbnails>');
      scope.data = [
          {
              dateTake: '7/3/15 1:55 AM',
              author: 'nobody@flickr.com (Dynamutt)',
              link: 'https://www.flickr.com/photos/dynamutt/25896451336/',
              media: {
                m: 'https://farm2.staticflickr.com/1607/25896451336_1d58f56b17_m.jpg'
            }
          }
      ];
      $compile(element)(scope);
      scope.$digest();
    });
  });

  it('should bind the item of the list to the template', function() {
    var item = scope.data[0];
    expect(element.find('p').text()).toBe(item.author);
    expect(element.find('a').attr('href')).toBe(item.link);
    expect(element.find('img').attr('src')).toBe(item.media.m);
  });

});

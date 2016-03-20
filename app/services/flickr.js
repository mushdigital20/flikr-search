class FlickrService {
    constructor($http, AppSettings) {
        this.http = $http;
        this.url = AppSettings.flickrAPIUrl;
    }
    getData(tag) {
        return this.http.jsonp(this.url + tag);
    }
}

// Dependencies
FlickrService.$inject = ['$http', 'AppSettings'];

export default {
  name: 'FlickrService',
  fn: FlickrService
};

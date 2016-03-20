
class ThumbnailsDirective {
    constructor() {  
        this.restrict = 'EA';
        this.templateUrl = 'thumbnails/thumbnails.html';
        this.scope = {
            list: '='
        };
    }
}

export default {
  name: 'thumbnails',
  fn: () => {
      return new ThumbnailsDirective();
    }
};

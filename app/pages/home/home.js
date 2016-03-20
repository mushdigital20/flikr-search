class HomeController {
    constructor(FlickrService) {   
        this.searchTerm = '';
        this.flikr = FlickrService;
        this.search();
    }
    
    search() { // executes search based on the search term
        this.flikr.getData(this.searchTerm).then((result) => {
            this.data = result.data.items;
        });
    }
    
    // Responds the Enter being pressed
    keypress(event) {
        if(event.keyCode === 13) {
            this.search();
        }
    }
}

// Dependencies
HomeController.$inject = ['FlickrService'];

export default {
  name: 'HomeController',
  fn: HomeController
};

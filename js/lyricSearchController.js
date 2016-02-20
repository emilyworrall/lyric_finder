lyricSearch.controller('LyricSearchController', ['Search', function(Search) {
  var self = this;


  self.doSearch = function() {
    Search.query(self.searchTerm)
       .then(function(response) {
         self.searchResult = response.data.message.body.track_list;
       });
  };

}]);

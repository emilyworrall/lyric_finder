lyricSearch.controller('LyricSearchController', [function() {
  var self = this;


  self.doSearch = function() {
    self.searchResult = {
      "items": [
        {
          "track_name": "Love Yourself",
          "artist_name": "Justin Bieber"
        }
      ]
    };
  };

}]);

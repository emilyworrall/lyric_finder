lyricSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'http://api.musixmatch.com/ws/1.1/track.search';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'f_has_lyrics': 1,
          's_track_rating': 'DESC',
          'page_size': 30,
          'apikey': musixmatchToken
        }
      });
    }
  }

}]);

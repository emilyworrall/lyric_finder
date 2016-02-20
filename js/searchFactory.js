lyricSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'http://api.musixmatch.com/ws/1.1/track.search';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'apikey': musixmatchToken
        }
      });
    }
  }

}]);

describe('LyricSearchController', function() {
  beforeEach(module('LyricSearchTool'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('LyricSearchController');
  }));

  describe('when searching for a song', function() {

    var items = [
      {
        "track_name": "Love Yourself",
        "artist_name": "Justin Bieber"
      }
    ];

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});

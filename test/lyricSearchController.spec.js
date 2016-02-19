describe('LyricSearchController', function() {
  beforeEach(module('LyricSearchTool'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('LyricSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});

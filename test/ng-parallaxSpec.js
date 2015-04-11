describe('ngParallax', function() {
  var elm, scope,
      testImgUrl = "/img/test.png";

  beforeEach(module('ngParallax'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element('<div id="wrapper" style="height:100px;">' +
      '  <ng-parallax background-url="' + testImgUrl + '">' +
      '    <p style="height:1000px;">Content here</p>' +
      '  </ng-parallax>' +
      '</div>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should not throw errors', function() {
    expect(elm).toBeDefined();
  });
});

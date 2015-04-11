angular.module("ngParallax", [])
.directive("ng-parallax", function($document) {
  var parallaxLink = function(scope, el, attrs) {
    var p = el.find(".ng-parallax");
    p.css("background-image", "url(" + scope.backgroundUrl + ")");
    $document.on("scroll", function() {
      var scrollTop = $document.scrollTop();
      var top = p.position().top;
      var height = p.height();
      if (top < scrollTop && top + height > scrollTop) {
        p.css({"background-position-y":  0.5 * (scrollTop - top) + "px"});
      }
    });
  };
  
  return {
    restrict: "AE",
    scope: {
      backgroundUrl: "@"
    },
    transclude: true,
    template: "<div class='ng-parallax'>" +
              "  <div class='ng-parallax-content'>" +
              "    <ng-transclude></ng-transclude>" +
              "  </div>" +
              "</div>",
    link: parallaxLink
  };
});

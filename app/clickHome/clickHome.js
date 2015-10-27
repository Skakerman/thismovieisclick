'use strict';

angular.module('clickApp.clickHome', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickHome', {
    templateUrl: 'clickHome/clickHome.html',
    controller: 'ClickHomeCtrl'
  });
}])

.controller('ClickHomeCtrl', ['$scope', function ($scope) {
  $scope.myInterval = 300;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function () {
    slides.push({
      image: 'assets/click'+i+'.jpg',
      text: 'This Movie is Click!'
    });
  };
  for (var i = 0; i < 7; i++) {
    $scope.addSlide();
  }

}]);
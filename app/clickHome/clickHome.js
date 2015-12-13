'use strict';

angular.module('clickApp.clickHome', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickHome', {
    templateUrl: 'clickHome/clickHome.html',
    controller: 'ClickHomeCtrl'
  });
}])

//TODO: Eventually make this responsive
.controller('ClickHomeCtrl', ['$scope', function ($scope) {
  $scope.grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
}]);
'use strict';

angular.module('clickApp.clickGame', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickGame', {
    templateUrl: 'clickGame/clickGame.html',
    controller: 'ClickGameCtrl'
  });
}])

.controller('ClickGameCtrl', ['$rootScope', function ($rootScope) {
  $rootScope.topNavTitle = "Click! the Game!";
}])

.directive("clickGame", ["", function(gameService) {
  return {
    restrict: 'A',
    template: '<canvas id="gameCanvas" width="600" height="640"></canvas>',
  }
}]);
'use strict';

angular.module('clickApp.clickAbout', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickAbout', {
    templateUrl: 'clickAbout/clickAbout.html'
  });
}]);
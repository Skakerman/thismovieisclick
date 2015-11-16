'use strict';

// Declare app level module which depends on views, and components
angular.module('clickApp', [
  'ngRoute',
  'clickApp.clickHome',
  'clickApp.clickQuiz',
  'clickApp.clickFacts',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/clickHome'});
}]);

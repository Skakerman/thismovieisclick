'use strict';

angular.module('clickApp.clickFacts', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickFacts', {
    templateUrl: 'clickFacts/clickFacts.html',
    controller: 'ClickFactsCtrl'
  });
}])

.controller('ClickFactsCtrl', [function () {

}]);
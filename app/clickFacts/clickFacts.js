'use strict';

angular.module('clickApp.clickFacts', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when('/clickFacts', {
    templateUrl: 'clickFacts/clickFacts.html',
    controller: 'ClickFactsCtrl'
  });
  $locationProvider.html5Mode(true);
}])

.controller('ClickFactsCtrl', function ($scope, $http) {
  var list = [];
  
  $scope.trivia = [{
    imageURL: "assets/clickFact.jpg",
    triviaWords: "Click is great!"
  }];

  var promise = $http.get('clickFacts/clickFacts.json')
    .then(function (response) {
      for (var j = 0; j < response.data.length; j++) {
        list.push({
          imageURL: "assets/clickFact.jpg",
          triviaWords: response.data[j].fact
        });
      }
      $scope.trivia = list;
    })
});

'use strict';

angular.module('clickApp.clickFacts', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickFacts', {
    templateUrl: 'clickFacts/clickFacts.html',
    controller: 'ClickFactsCtrl'
  });
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
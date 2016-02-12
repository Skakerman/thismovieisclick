'use strict';

angular.module('clickApp.clickFacts', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickFacts', {
    templateUrl: 'clickFacts/clickFacts.html',
    controller: 'ClickFactsCtrl'
  });
}])

.controller('ClickFactsCtrl', function ($scope, $http, $facts) {
  debugger;
  this.triviaImages = $facts.trivia;
})

.factory('$facts', ['$http', function ($http) {
  var wordFacts = null;
  debugger;
  $http.get('./clickFacts/clickFacts.json')
    .success(function (response) {
      wordFacts = response;
    })
    .error(function () {
      wordFacts = [{
        fact: "Click is great!"
      }]
    });

  //debugger;
  return {
    trivia: loadPictures(),
    //trivia: loadFacts()
  };

  function loadPictures() {
    debugger;
    var list = [],
      master = {
        imageURL: "assets/clickFact.jpg",
        triviaWords: "Click is great!"
      }
    
    $http.get('clickFacts/clickFacts.json')
    .success(function (response) {
      wordFacts = response;
    })
    .error(function () {
      wordFacts = [{
        fact: "Click is great!"
      }]
    });

    for (var j = 0; j < 14; j++) {
      list.push(angular.extend({}, master));
    }
    return list;
  }

  function loadFacts() {
    debugger;
    var list = [],
      master = {
        words: "Click is awesome!"
      }

    for (var j = 0; j < 14; j++) {
      list.push(angular.extend({}, master));
    }
    return list;
  }

}]);
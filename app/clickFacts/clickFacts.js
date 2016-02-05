'use strict';

angular.module('clickApp.clickFacts', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickFacts', {
    templateUrl: 'clickFacts/clickFacts.html',
    controller: 'ClickFactsCtrl'
  });
}])

.controller('ClickFactsCtrl', function ($facts) {
  this.triviaCollection = $facts.trivia;
})

.factory('$facts', function () {
  return {
    trivia: loadPictures()
  };

  function loadPictures() {
    var list = [],
      master = {
        imageURL: "assets/clickFact.jpg",
      }

    for (var j = 0; j < 14; j++) {
      list.push(angular.extend({}, master));
    }
    return list;
  }

});

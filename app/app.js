'use strict';

// Declare app level module which depends on views, and components
angular.module('clickApp', [
  'ngMaterial',
  'ngRoute',
  'clickApp.clickHome',
  'clickApp.clickQuiz',
  'clickApp.clickFacts',
  'clickApp.clickAbout',
  'ngMdIcons'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}])

.controller('AppCtrl', ['$scope', '$rootScope', '$timeout', '$mdSidenav', '$log', function ($scope, $rootScope, $timeout, $mdSidenav, $log) {
  $rootScope.topNavTitle = "Click!";
  $scope.tgState = false;
  $scope.toggleLeft = buildDelayedToggler('left');

  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
        args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function () {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function () {
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navID) {
    return function () {
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
  }
  }])

.controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });
  };
}]);
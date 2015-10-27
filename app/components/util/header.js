'use strict';

angular.module('clickApp.header', [])

.controller('HeaderCtrl', ['$scope', '$location',
    function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

}]);
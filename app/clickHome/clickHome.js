'use strict';

angular.module('clickApp.clickHome', ['ngRoute', 'ngAnimate', 'ngMaterial'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'clickHome/clickHome.html',
    controller: 'ClickHomeCtrl'
  });
  $locationProvider.html5Mode(true);
}])

////TODO: Eventually make this responsive
//.controller('ClickHomeCtrl', ['$scope', function ($scope) {
//  //  $scope.grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//  $scope.grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//}])

.controller('ClickHomeCtrl', function ($pictures) {
  debugger;
  this.filterBy = "All Pictures";
  this.sortedBy = "Featured";
  this.availableFilters = $pictures.availableFilters;
  this.availableSorts = $pictures.availableSorts;
  this.catalog = $pictures.catalog;
})

.factory('$pictures', function () {
  debugger;
  return {
    availableFilters: ["Adam Sandler", "Remote", "Jack Black"],
    availableSorts: ["Featured", "Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Date, new to old", "Date, old to new"],
    catalog: loadPictures()
  };

  function loadPictures() {
    var list = [],
      master = {
        imageURL: "assets/click1.jpg",
        title: "Click!",
        price: "$99.99"
      }

    for (var j = 0; j <= 9; j++) {
      master.imageURL = 'assets/click' + j + '.jpg';
      debugger;
      list.push(angular.extend({}, master));
    }
    debugger;
    return list;
  }

});

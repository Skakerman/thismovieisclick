/*! thisMovieIsClick 2015-11-14 */
"use strict";angular.module("clickApp.header",[]).controller("HeaderCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]);
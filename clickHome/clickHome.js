/*! thisMovieIsClick 2015-11-14 */
"use strict";angular.module("clickApp.clickHome",["ngRoute","ngAnimate","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/clickHome",{templateUrl:"clickHome/clickHome.html",controller:"ClickHomeCtrl"})}]).controller("ClickHomeCtrl",["$scope",function(a){a.myInterval=1e3,a.noWrapSlides=!1;var b=a.slides=[];a.addSlide=function(){b.push({image:"assets/click"+c+".jpg",text:"This Movie is Click!"})};for(var c=0;7>c;c++)a.addSlide()}]);
/*! thisMovieIsClick 2015-11-14 */
"use strict";describe("clickApp.version module",function(){beforeEach(module("clickApp.version")),describe("version service",function(){it("should return current version",inject(function(a){expect(a).toEqual("0.1")}))})});
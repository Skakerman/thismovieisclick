require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Declare app level module which depends on views, and components
angular.module('clickApp', [
  'ngRoute',
  'clickApp.clickHome',
  'clickApp.clickQuiz',
  'clickApp.clickFacts',
  'clickApp.version',
  'clickApp.header'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/clickHome'});
}]);

},{}],"app":[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],"clickFacts/clickFacts":[function(require,module,exports){
'use strict';

angular.module('clickApp.clickFacts', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickFacts', {
    templateUrl: 'clickFacts/clickFacts.html',
    controller: 'ClickFactsCtrl'
  });
}])

.controller('ClickFactsCtrl', [function () {

}]);
},{}],"clickHome/clickHome":[function(require,module,exports){
'use strict';

angular.module('clickApp.clickHome', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickHome', {
    templateUrl: 'clickHome/clickHome.html',
    controller: 'ClickHomeCtrl'
  });
}])

.controller('ClickHomeCtrl', ['$scope', function ($scope) {
  $scope.myInterval = 1000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function () {
    slides.push({
      image: 'assets/click' + i + '.jpg',
      text: 'This Movie is Click!'
    });
  };
  for (var i = 0; i < 7; i++) {
    $scope.addSlide();
  }

}]);
},{}],"clickQuiz/clickQuiz":[function(require,module,exports){
'use strict';

angular.module('clickApp.clickQuiz', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickQuiz', {
    templateUrl: 'clickQuiz/clickQuiz.html',
    controller: 'ClickQuizCtrl'
  });
}])

.controller('ClickQuizCtrl', function () {
})

.directive('quiz', ['quizFactory', function (quizFactory) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'clickQuiz/partial-quiz.html',
    link: function (scope, elem, attrs) {
      scope.start = function () {
        scope.score = 0;
        scope.id = 0;
        scope.quizOver = false;
        scope.inProgress = true;
        scope.totQs = quizFactory.totQs();
        scope.getQuestion();
      };

      scope.getQuestion = function () {
        if (scope.id < scope.totQs) {
          scope.question = quizFactory.ques(scope.id);
          scope.options = quizFactory.opts(scope.id);
          scope.correct = quizFactory.correct(scope.id);
          scope.answerMode = true;
        } else {
          scope.quizOver = true;
        }
      };

      scope.checkAnswer = function () {
        console.log(event.target.id);

        var ans = event.target.id;

        if (ans == scope.options[scope.correct]) {
          scope.score++;
          scope.correctAns = true;
        } else {
          scope.correctAns = false;
        }

        scope.answerMode = false;
      };

      scope.nextQuestion = function () {
        scope.id++;
        scope.getQuestion();
      };

      scope.reset = function () {
        scope.score = 0;
        scope.inProgress = false;
      };
    }
  }
}])

.factory('quizFactory', ['$http', function ($http) {
  var questions = null;
  $http.get('clickQuiz/quizQs.json')
    .success(function (response) {
      questions = response;
    })
    .error(function () {
      questions = [{
        question: "BROKEN",
        options: ["BROEKN", "BORKEN", "BRICKEN"],
        correct: 0
      }]
    });
  return {
    ques: function (id) {
      return questions[id].question;
    },
    opts: function (id) {
      return questions[id].options;
    },
    correct: function (id) {
      return questions[id].correct;
    },
    totQs: function () {
      return questions.length;
    }
  };

}]);
},{}],"components/util/header":[function(require,module,exports){
'use strict';

angular.module('clickApp.header', [])

.controller('HeaderCtrl', ['$scope', '$location',
    function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

}]);
},{}],"components/version/interpolate-filter":[function(require,module,exports){
'use strict';

angular.module('clickApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

},{}],"components/version/version-directive":[function(require,module,exports){
'use strict';

angular.module('clickApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

},{}],"components/version/version":[function(require,module,exports){
'use strict';

angular.module('clickApp.version', [
  'clickApp.version.interpolate-filter',
  'clickApp.version.version-directive'
])

.value('version', '0.1');

},{}]},{},[1]);

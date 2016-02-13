'use strict';

angular.module('clickApp.clickQuiz', ['ngRoute', 'ngMaterial'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickQuiz', {
    templateUrl: 'clickQuiz/clickQuiz.html',
    controller: 'ClickQuizCtrl'
  });
}])

.controller('ClickQuizCtrl', function () {})

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

      scope.checkAnswer = function (choice) {
        console.log("Choice: " + choice);

        if (choice == scope.options[scope.correct]) {
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

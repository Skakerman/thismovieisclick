'use strict';

angular.module('clickApp.clickQuiz', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clickQuiz', {
    templateUrl: 'clickQuiz/clickQuiz.html',
    controller: 'ClickQuizCtrl'
  });
}])

.controller('ClickQuizCtrl', [function () {

}])

.directive('quiz', function (quizFactory) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'clickQuiz/partial-quiz.html',
    link: function (scope, elem, attrs) {
      scope.start = function () {
        scope.id = 0;
        scope.quizOver = false;
        scope.inProgress = true;
        scope.getQuestion();
      };

      scope.getQuestion = function () {
        var q = quizFactory.getQuestion(scope.id);
        if (q) {
          debugger;;
          scope.question = q.question;
          scope.options = q.options;
          scope.correct = q.correct;
          scope.answerMode = true;
        } else {
          scope.quizOver = true;
        }
      };

      scope.checkAnswer = function () {
        debugger;
        // This doesn't work, scope.answer is reading the value from the 
        // JSON for the question set. Not what is input
        console.log(scope.answer);
//        if (!((scope.answer).val)) return;

        var ans = scope.answer;

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
      }

      scope.reset = function () {
        scope.score = 0;
        scope.inProgress = false;
      }
    }
  }
})

.factory('quizFactory', function () {
  var questions = [
    {
      question: "Who starred in Click?",
      options: ["Adam Sandler", "Saddam Andler", "Adam Chandler"],
      correct: 0
    }
  ];

  return {
    getQuestion: function (id) {
      if (id < questions.length) {
        return questions[id];
      } else {
        return false;
      }
    }
  };
});
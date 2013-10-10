define(["require", "exports", 'services/quizService'], function(require, exports, __quizService__) {
    var quizService = __quizService__;

    var QuizListViewModel = (function () {
        function QuizListViewModel() {
            this.quizList = ko.observableArray();
        }
        QuizListViewModel.prototype.loadQuiz = function () {
            var _this = this;
            return quizService.getData().then(function (data) {
                _this.quizList(data);
            });
        };

        QuizListViewModel.prototype.activate = function () {
            this.loadQuiz();
        };
        return QuizListViewModel;
    })();
    ;

    
    return QuizListViewModel;
});
//# sourceMappingURL=quizList.js.map

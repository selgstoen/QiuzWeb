define(["require", "exports", 'services/quizService'], function(require, exports, __quizService__) {
    var quizService = __quizService__;

    var quiz = (function () {
        function quiz() {
            var _this = this;
            this.quiz = ko.observable();
            this.questions = ko.observableArray();
            this.name = ko.computed(function () {
                if (!_this.quiz())
                    return 'Quiz not found';
                return _this.quiz().name;
            });
        }
        quiz.prototype.updateData = function () {
            var self = this;
            return quizService.getData().then(function (data) {
                var quizList = data;
                var target = _.find(quizList, function (q) {
                    return q.id === self.id;
                });
                self.quiz(target);
                self.questions(target.quizItems);
            });
        };

        quiz.prototype.activate = function (data) {
            this.id = +data;
            this.updateData();
        };
        return quiz;
    })();
    ;

    
    return quiz;
});
//# sourceMappingURL=quiz.js.map

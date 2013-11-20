define(["require", "exports"], function(require, exports) {
    var QuizItemViewModel = (function () {
        function QuizItemViewModel() {
            var _this = this;
            this.quizItem = ko.observable();
            this.answers = ko.observableArray();
            //question = ko.computed<string>(() => {
            //    if (!this.quizItem())
            //        return 'question not found';
            //    return 'Question one';
            //});
            this.question = ko.computed(function () {
                if (!_this.quizItem())
                    return 'question not found';
                return _this.quizItem().question;
            }, this);
        }
        QuizItemViewModel.prototype.activate = function (settings) {
            this.quizItem(settings.question);
            this.answers(settings.question.alternatives);
        };
        return QuizItemViewModel;
    })();

    var model = QuizItemViewModel;
    
    return model;
});
//# sourceMappingURL=viewmodel.js.map

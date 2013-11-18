define(["require", "exports"], function(require, exports) {
    var QuizItemViewModel = (function () {
        function QuizItemViewModel() {
            var _this = this;
            this.quizItem = ko.observable();
            this.answers = ko.observableArray();
            this.question = ko.computed(function () {
                if (!_this.quizItem())
                    return 'question not found';
                return 'Question one';
            });
        }
        //question = ko.computed<string>(() => {
        //    if (!this.quizItem())
        //        return 'question not found';
        //    return this.quizItem().question;
        //}, this);
        QuizItemViewModel.prototype.activate = function (quizItem) {
            this.quizItem(quizItem);
            this.answers(quizItem.alternatives);
        };
        return QuizItemViewModel;
    })();

    var model = QuizItemViewModel;
    
    return model;
});
//# sourceMappingURL=viewmodel.js.map

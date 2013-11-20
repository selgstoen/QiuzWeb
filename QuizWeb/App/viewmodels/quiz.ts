import quizService = require('services/quizService');

class quiz {
    id: number;
    quiz = ko.observable<IQuizViewModel>();
    questions = ko.observableArray<IQuizItemViewModel>();

    name = ko.computed<string>(() => {
        if (!this.quiz()) return 'Quiz not found';
        return this.quiz().name;
    });

    private updateData() {
        var self = this;
        return quizService.getData()
            .then(data => {
                var quizList = data;
                var target = _.find(quizList, q => q.id === self.id);
                self.quiz(target);
                self.questions(target.quizItems);
                });
    }


    activate(data) {
        this.id = + data;
        this.updateData();
    }
};

export = quiz;



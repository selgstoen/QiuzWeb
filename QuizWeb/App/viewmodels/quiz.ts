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
       
        return quizService.getData()
            .then(data => {
                var quizList = data;
                var target = _.find(quizList, q => q.id === this.id);
                this.quiz(target);
                this.questions(target.questions);
                });
    }


    activate(data) {
        this.id = + data;
        this.updateData();
    }
};

export = quiz;



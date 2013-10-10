import quizService = require('services/quizService');

class quiz {
    id: number;
    quiz = ko.observable<IQuizViewModel>();
    currentItemIndex = ko.observable<number>(0);
    currentItem = ko.computed<IQuizItemViewModel>(() => {
        if (!this.quiz()) return null;
        return this.quiz().quizItems[this.currentItemIndex()];
    }, this);
    

    name = ko.computed<string>(() => {
        if (!this.quiz()) return 'Quiz not found';
        return this.quiz().name;
    });

    private updateData() {
       
        return quizService.getData()
            .then(data => {
                var quizList = data;
                var target = _.find(quizList, q => q.id === this.id);
                this.currentItemIndex(0);
                this.quiz(target);
                });
    }


    activate(data) {
        this.id = + data;
        this.updateData();
    }
};

export = quiz;



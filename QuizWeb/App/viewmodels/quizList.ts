import quizService = require('services/quizService');

class QuizListViewModel {

    quizList = ko.observableArray<IQuizViewModel>();

    private loadQuiz() {
        return quizService.getData()
            .then(data => {
                this.quizList(data);
            });
    }

    activate() {
        this.loadQuiz();
    }

};

export = QuizListViewModel;



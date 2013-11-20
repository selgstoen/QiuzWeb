class QuizItemViewModel implements IViewModel {
    quizItem = ko.observable<IQuizItemViewModel>();
    answers = ko.observableArray<IQuizItemAlternativeViewModel>();

    //question = ko.computed<string>(() => {
    //    if (!this.quizItem())
    //        return 'question not found';
    //    return 'Question one';
    //});
    

    question = ko.computed<string>(() => {
        if (!this.quizItem())
            return 'question not found';
        return this.quizItem().question;
    }, this);

    activate(settings: any) {
        this.quizItem(settings.question);
        this.answers(settings.question.alternatives);
    }

}

var model: any = QuizItemViewModel;
export = model;
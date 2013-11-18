interface IViewModel {
    activate(settings);
}

interface IQuizViewModel {
    id: number;
    name: string;
    quizItems: IQuizItemViewModel[];
}

interface IQuizItemViewModel {
    question: string;
    alternatives: IQuizItemAlternativeViewModel[];
}

interface IQuizItemAlternativeViewModel {
    answer: string;
    isCorrect: boolean;
}


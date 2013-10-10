import http = require('plugins/http');

class QuizService implements IQuizService {

    getData() {
        return http.get('api/quiz');
    }
}
var instance: IQuizService = new QuizService();
export = instance;
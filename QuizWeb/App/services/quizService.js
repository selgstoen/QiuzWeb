define(["require", "exports", 'plugins/http'], function(require, exports, __http__) {
    var http = __http__;

    var QuizService = (function () {
        function QuizService() {
        }
        QuizService.prototype.getData = function () {
            return http.get('api/quiz');
        };
        return QuizService;
    })();
    var instance = new QuizService();
    
    return instance;
});
//# sourceMappingURL=quizService.js.map

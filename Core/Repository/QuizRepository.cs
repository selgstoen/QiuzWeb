using System.Collections.Generic;
using Core.Model;

namespace Core.Repository
{
    public interface IQuizRepository
    {
        IList<Quiz> GetAll();
    }

    public class QuizRepository : IQuizRepository
    {
        public IList<Quiz> GetAll()
        {
            return new List<Quiz>
            {
                new Quiz{Id=1,Name="Math quiz",Description = "An easy quiz", QuizItems = GetQuizItems()},
                new Quiz{Id=2,Name="Second Quiz",Description = "A hard quiz"}
            };
        }

        private IList<QuizItem> GetQuizItems()
        {
            var quizItems = new List<QuizItem>();
            quizItems.Add(new QuizItem {Question = "Which is max?", Alternatives = new List<QuizItemAlternative>
            {
                new QuizItemAlternative{Answer="1",IsCorrect=false},
                new QuizItemAlternative{Answer = "100", IsCorrect = true},
                new QuizItemAlternative{Answer = "23", IsCorrect = false}
            }});

            quizItems.Add(new QuizItem
            {
                Question = "Which is min?",
                Alternatives = new List<QuizItemAlternative>
            {
                new QuizItemAlternative{Answer="1",IsCorrect=true},
                new QuizItemAlternative{Answer = "100", IsCorrect = false},
                new QuizItemAlternative{Answer = "23", IsCorrect = false}
            }
            });

            return quizItems;
        }
    }
}

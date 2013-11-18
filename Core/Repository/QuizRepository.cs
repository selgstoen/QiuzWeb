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
                new Quiz{Id=1,Name="Math quiz",Description = "An easy quiz", QuizItems = GetQuizItemsEasy()},
                new Quiz{Id=2,Name="Music quiz",Description = "A hard quiz", QuizItems = GetQuizItemsHard()}
            };
        }

        private IList<QuizItem> GetQuizItemsEasy()
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

        private IList<QuizItem> GetQuizItemsHard()
        {
            var quizItems = new List<QuizItem>();
            quizItems.Add(new QuizItem
            {
                Question = "Who is best",
                Alternatives = new List<QuizItemAlternative>
            {
                new QuizItemAlternative{Answer="Zappa",IsCorrect=true},
                new QuizItemAlternative{Answer = "Iggy Pop", IsCorrect = false},
                new QuizItemAlternative{Answer = "Kiss", IsCorrect = false}
            }
            });

            quizItems.Add(new QuizItem
            {
                Question = "Who plays guitar?",
                Alternatives = new List<QuizItemAlternative>
            {
                new QuizItemAlternative{Answer="Richie Blackmore",IsCorrect=true},
                new QuizItemAlternative{Answer = "Ken Hensly", IsCorrect = false},
                new QuizItemAlternative{Answer = "Jim Morrison", IsCorrect = false}
            }
            });

            return quizItems;
        }
    }
}

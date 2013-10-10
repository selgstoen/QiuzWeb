using System;
using System.Collections;
using System.Collections.Generic;

namespace Core.Model
{
    public class Quiz
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public string Description { get; set; }
        public IList<QuizItem> QuizItems { get; set; }
    }

    public class QuizItem
    {
        public string Question { get; set; }
        public IList<QuizItemAlternative> Alternatives { get; set; }
    }

    public class QuizItemAlternative
    {
        public string Answer { get; set; }
        public bool IsCorrect { get; set; }
    }
}

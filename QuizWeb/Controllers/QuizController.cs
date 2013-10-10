using System.Collections.Generic;
using System.Web.Http;
using Core.Model;
using Core.Repository;

namespace QuizWeb.Controllers
{
    public class QuizController : ApiController
    {

        public IEnumerable<Quiz> Get()
        {
            var repository =new QuizRepository();
            return repository.GetAll();
        }
    }
}
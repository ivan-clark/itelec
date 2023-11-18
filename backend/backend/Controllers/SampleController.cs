using backend.Entities;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        [HttpGet]
        public List<string> Sample()
        {
            List<string> list = new List<string> { "first", "second", "third", "fourth", "fifth", "sixth" };

            return list;
        }

        [HttpGet]
        public string Duhig(string name)
        {
            return "WELCOME " + name;
        }

        [HttpPost]
        public string Test(UserModel model)
        {
            using (var context = new ItelecdbContext())
            {
                context.Users.Add(new User{
                    Username = model.Username,
                    Password = model.Password,
                    Firstname = model.FirstName,
                    Lastname = model.LastName
                });

                context.SaveChanges();
            }
            return "SUCCESS";
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Models;
using MovieAPI.Data;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly ApiContext _context;

        public MovieController(ApiContext context)
        {
            _context = context;
        }

        // Create/Edit
        [HttpPost]
        public JsonResult CreateEdit(Movie movie)
        {
            if(movie.Id == 0)
            {
                _context.Movies.Add(movie);
            }
            else
            {
                var movieInDb = _context.Movies.Find(movie.Id);

                if(movieInDb == null) {
                    return new JsonResult(NotFound());
                }

                movieInDb = movie;
            }

            _context.SaveChanges();

            return new JsonResult(Ok(movie));
        }

        // Get
        [HttpGet]
        public JsonResult Get(int id)
        {
            var result = _context.Movies.Find(id);

            if(result == null)
            {
                return new JsonResult(NotFound());  
            }

            return new JsonResult(Ok(result));
        }

        //Delete
        [HttpDelete]
        public JsonResult Delete(int id) 
        {
            var result = _context.Movies.Find(id);

            if (result == null)
            {
                return new JsonResult(NotFound());
            }

            _context.Movies.Remove(result);
            _context.SaveChanges();

            return new  JsonResult(NoContent());
        }

        // Get all
        [HttpGet("/GetAll")]
        public JsonResult GetAll()
        {
            var result = _context.Movies.ToList();  

            return new JsonResult(Ok(result));
        }

    }
}

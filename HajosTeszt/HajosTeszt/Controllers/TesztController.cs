using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class TesztController : ControllerBase
    {
        [HttpGet]
        [Route("corvinus/szerverido")]
        public IActionResult M1()
        {
            string pontosIdő = DateTime.Now.ToShortTimeString();

            return new ContentResult
            {
                ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
                Content = pontosIdő
            };
        }

        [HttpGet]
        [Route("corvinus/nagybetus/{szoveg}")]
        public IActionResult M2(string szoveg)
        {
            if (szoveg is string) //ez így nem jó mert a szoveget stringnek deklaráljuk és így az 123 is string lesz
            {
                return new ContentResult
                {
                    ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
                    Content = szoveg.ToUpper()
                };
            } else
            {
                return BadRequest("Nem jó a bemenő adat");
            }
            
            

        }
    }
}

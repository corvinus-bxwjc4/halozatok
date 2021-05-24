using HajosTeszt.BeadandoModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/whisky")]
    [ApiController]
    public class BeadandoController : ControllerBase
    {
        // GET: api/whisky/count
        [HttpGet]
        [Route("count")]
        public int elso()
        {
            SzamhaloContext context = new SzamhaloContext();
            int whiskyszam = context.CsergoDaniels.Count();
            return whiskyszam;
        }

        // GET api/whisky/all
        [HttpGet]
        [Route("all")]
        public IEnumerable<CsergoDaniel> Get()
        {
            SzamhaloContext context = new SzamhaloContext();
            return context.CsergoDaniels.ToList();
        }

        // GET api/whisky/{id}
        [HttpGet("{id}")]
        public CsergoDaniel Get(int id)
        {
            SzamhaloContext context = new SzamhaloContext();
            var keresett = (from x in context.CsergoDaniels
                            where x.Id == id
                            select x).FirstOrDefault();
            return keresett;
        }

        // POST api/whisky
        [HttpPost]
        public void Post([FromBody] CsergoDaniel ujWhisky)
        {
            SzamhaloContext context = new SzamhaloContext();
            context.CsergoDaniels.Add(ujWhisky);
            context.SaveChanges();
        }

        // DELETE api/whisky/delete/5
        [HttpDelete("delete/{id}")]
        public void Delete(int id)
        {
            SzamhaloContext context = new SzamhaloContext();
            var torlendo = (from x in context.CsergoDaniels
                            where x.Id == id
                            select x).FirstOrDefault();
            context.Remove(torlendo);
            context.SaveChanges();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DefaultController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Web API Padrão");
        }
    }
}
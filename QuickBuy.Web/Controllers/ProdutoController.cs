using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        //Configuração para pegar arquivos do contexto da requisição
        private IHttpContextAccessor _httpContextAccessor;
        //Para obter informação da pasta raiz onde o site está sendo executado
        private IHostingEnvironment _hostingEnvironment;

        public ProdutoController(IProdutoRepositorio produtoRepositorio, 
                                    IHttpContextAccessor httpContextAccessor,
                                        IHostingEnvironment hostingEnvironment)
        {
            _produtoRepositorio = produtoRepositorio;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtoRepositorio.ObterTodos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("Cadastrar")]
        public IActionResult Post([FromBody] Produto produto)
        {
            try
            {
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto", produto);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }
    }
}

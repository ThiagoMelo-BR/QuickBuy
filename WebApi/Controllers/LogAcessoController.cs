using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class LogAcessoController : Controller
    {
        private readonly ILogAcessoRepositorio logAcessoRepositorio;
        private readonly IUsuarioRepositorio usuarioRepositorio;

        public LogAcessoController(ILogAcessoRepositorio logAcessoRepositorio, 
            IUsuarioRepositorio usuarioRepositorio) 
        {
            this.logAcessoRepositorio = logAcessoRepositorio;
            this.usuarioRepositorio = usuarioRepositorio;
        }

        [HttpGet]
        public IActionResult Listar(DateTime datainicial, DateTime datafinal)
        {
            try
            {
                return Ok(this.logAcessoRepositorio.ObterTodos(datainicial, datafinal));

            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult RegistrarNoSistema([FromBody] Usuario usuario)
        {
            try
            {
                if (!this.usuarioRepositorio.EmailCadastrado(usuario.Email))
                {
                    throw new Exception("Usuário não cadastrado!");
                }

                var acesso = new LogAcesso()
                {
                    Data = DateTime.Now,
                    UsuarioId = usuario.Id
                };              

                this.logAcessoRepositorio.Adicionar(acesso);

                return Ok(new { retorno = "Usuário logado com sucesso!" });
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
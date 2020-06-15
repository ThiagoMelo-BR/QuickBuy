using System;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio usuarioRepositorio;

        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            this.usuarioRepositorio = usuarioRepositorio;

            /*
            for (int i = 1; i < 10000; i++)
            {
                Usuario u = new Usuario()
                {
                    Id = i,
                    Nome = "thiago",
                    Ativo = true,
                    EhAdministrador = true,
                    Email = "thiago.melo@outlook.com.br",
                    Senha = "123",
                    SobreNome = "Melo",
                };
                this.usuarioRepositorio.Adicionar(u);
            }*/
            
            
        }

        [HttpGet]
        public IActionResult ObterTodos()
        {
            try
            {
                return Ok(this.usuarioRepositorio.ObterTodos());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message.ToString());
            }
            
        }

        [HttpPost]
        public IActionResult CadastrarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                if (usuario.Id > 0)
                {
                    this.usuarioRepositorio.Atualizar(usuario);
                }
                else
                {
                    if (this.usuarioRepositorio.EmailCadastrado(usuario.Email))
                    {
                        throw new Exception("Usuário já cadastrado com este e-mail!");
                    }

                    this.usuarioRepositorio.Adicionar(usuario);
                }
                return Ok(new { retorno = "Dados atualizados com sucesso!" });

            }
            catch (Exception e)
            {
                return BadRequest(e.Message.ToString());
            }           
            
        }

        [HttpDelete]
        public IActionResult Excluir(int id)
        {
            try
            {
                var usuario = this.usuarioRepositorio.ObterPorId(id);
                this.usuarioRepositorio.Excluir(usuario);
                return Ok(new { retorno = "Usuário excluído com sucesso!" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message.ToString());
            }
        }

        [HttpPost]
        public IActionResult Validar(Usuario usuario)
        {
            try
            {
                return Ok(this.usuarioRepositorio.VerificarUsuario(usuario));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message.ToString());
            }
        }

    }
}
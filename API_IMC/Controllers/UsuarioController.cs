using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API_IMC.Controllers{
    [ApiController]
    [Route("API/usuario")]
    public class UsuarioController : ControllerBase{
        private readonly DataContext _context;

        public UsuarioController(DataContext context) => _context = context;

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Usuario usuario){
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            return Created("", usuario);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Usuarios.ToList());
    }
}
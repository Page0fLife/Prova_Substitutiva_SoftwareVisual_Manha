using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API_IMC.Controllers{
    [ApiController]
    [Route("API/Imc")]
    public class ImcController : ControllerBase{
        private readonly DataContext _context;

        public ImcController(DataContext context) => _context = context;

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Imc imc){
            imc.IMC = Calculo.CalcularImc(imc.peso, imc.altura);
            imc.classificacao = Calculo.ClassificacaoImc(imc.IMC);
            _context.Imcs.Add(imc);
            _context.SaveChanges();
            return Created("", imc);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar(){
            List<Imc> imcs = _context.Imcs.Include(f => f.usuario).ToList();
            if(imcs.Count == 0) return NotFound();
            else return Ok(imcs);
        }

        [HttpPatch]
        [Route("alterar")]
        public IActionResult Alterar([FromBody] Imc imc){
               try
            {
                imc.IMC = Calculo.CalcularImc(imc.peso, imc.altura);
                imc.classificacao = Calculo.ClassificacaoImc(imc.IMC);
                _context.Imcs.Update(imc);
                _context.SaveChanges();
                return Ok(imc);
            }
            catch
            {
                return NotFound();
            }
        }
        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar([FromRoute] int Id){
            Imc imc = _context.Imcs.Find(Id);
            return imc != null ? Ok(imc) : NotFound();
        }
    }
}
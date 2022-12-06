using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Imc
    {
        [Key]
        public int Id { get; set; }

        public double altura { get; set; }

        public double IMC { get; set; }

        public double peso { get; set; }

        public string classificacao { get; set; }

        public int usuarioId { get; set; }

        public Usuario usuario { get; set; }
    }
}
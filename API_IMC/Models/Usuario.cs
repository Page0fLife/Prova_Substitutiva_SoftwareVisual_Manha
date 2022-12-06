using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models{
    public class Usuario{
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string nome { get; set; }
        public DateTime nascimento { get; set; }
    }
}
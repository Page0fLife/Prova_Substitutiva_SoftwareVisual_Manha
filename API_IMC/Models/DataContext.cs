using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Imc> Imcs { get ; set; }
    }
}
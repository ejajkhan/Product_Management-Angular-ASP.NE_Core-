using backendApi.Model;
using Microsoft.EntityFrameworkCore;

namespace backendApi.Data
{
    public class AppDBContext:DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options): base(options) 
        {
            
        }
        public DbSet<Product> Products { get; set; }
    }
}

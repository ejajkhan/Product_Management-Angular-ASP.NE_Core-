using backendApi.Controllers;
using backendApi.Model;
using Microsoft.EntityFrameworkCore;

namespace backendApi.Data
{
    public class ProductRepository: IProductRepository
    {
        private readonly AppDBContext _dbContext;
        public ProductRepository(AppDBContext context)
        {
            _dbContext = context;
        }

        public async Task AddProduct(Product product)
        {
            await _dbContext.Products.AddAsync(product);
            await _dbContext.SaveChangesAsync();
        }
        public async Task<List<Product>> GetAllList()
        {
             return await _dbContext.Products.ToListAsync();
            
        }

        public async Task<Product> GetProductByID(int id)
        {
            return await _dbContext.Products.FindAsync(id);
            
        }
        public async Task UpdateProduct(int id,Product product)
        {
            Product exist= await _dbContext.Products.FindAsync(id);
            if(exist==null)
            {
                throw new Exception("Product not found");
            }
            exist.Name = product.Name;
            exist.Description = product.Description;
            exist.Price = product.Price;
            await _dbContext.SaveChangesAsync();

        }
        public  async Task DeleteProduct(int id)
        {
            Product exist = await _dbContext.Products.FindAsync(id);
            if (exist == null)
            {
                throw new Exception("Product not found");
            }
            _dbContext.Products.Remove(exist);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAll()
        {
            _dbContext.Products.RemoveRange(_dbContext.Products);
            await _dbContext.SaveChangesAsync();
        }
    }
}

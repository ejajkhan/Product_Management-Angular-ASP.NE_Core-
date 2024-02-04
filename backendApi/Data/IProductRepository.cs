using System.Collections.Generic;
using System.Threading.Tasks;
using backendApi.Model;
namespace backendApi.Data
{
    public interface IProductRepository
    {
        Task AddProduct(Product product);
        Task<List<Product>> GetAllList();
        Task<Product> GetProductByID(int id);
        Task UpdateProduct(int id, Product product);
        Task DeleteProduct(int id);
        Task DeleteAll();
    }
}

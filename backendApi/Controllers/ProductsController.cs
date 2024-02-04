using backendApi.Data;
using backendApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace backendApi.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : Controller
    {
        private readonly IProductRepository _repository;

        public ProductsController(IProductRepository productRepository)
        {
            _repository= productRepository;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Product product)
        {
            await  _repository.AddProduct(product);
            Console.WriteLine("add  products endpoint reached");
            return Ok(product);
        }

        [HttpGet]
        public async Task<ActionResult> GetProductList()
        {
            var products= await _repository.GetAllList();
            Console.WriteLine("Get all products endpoint reached");
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductByID( int id)
        {
            var product=await _repository.GetProductByID(id);
            if(product!=null)
            {
                return Ok(product);
            }
            return NotFound(); 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id,Product product)
        {
            await _repository.UpdateProduct(id, product);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            await _repository.DeleteProduct(id);
            return Ok();
        }

        [HttpDelete("delete-all-data")]
        public async Task<IActionResult> DeleteAllData()
        {
            await _repository.DeleteAll();
            return Ok();
        }

    }
}

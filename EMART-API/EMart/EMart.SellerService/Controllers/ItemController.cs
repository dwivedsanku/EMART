using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.SellerService.Entity;
using EMart.SellerService.Repositories;

namespace EMart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("ViewItems/{sid}")]
        public IActionResult Get(int sid)
        {
            try
            {
                return Ok(_repo.ViewItems(sid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_repo.GetById(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddItem")]
        public IActionResult Add(Items item)
        {
            try
            {
                _repo.AddItem(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult Update(Items item)
        {
            try
            {
                _repo.UpdateItem(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _repo.DeleteItem(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("category")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("subcategory/{categoryid}")]
        public IActionResult GetSubCategories(int categoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(categoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

    }
}
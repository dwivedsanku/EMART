using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.AdminService.Entity;
using EMart.AdminService.Repositories;

namespace EMart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category category)
        {
            try
            {
                _repo.AddCategory(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{id}")]
        public IActionResult DeleteCategory(int id)
        {
            try
            {
                _repo.DeleteCategory(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.AddSubCategory(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCategory/{subid}")]
        public IActionResult DeleteSubCategory(int subid)
        {
            try
            {
                _repo.DeleteSubCategory(subid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            try
            {
                return Ok(_repo.GetAllCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory")]
        public IActionResult GetSubCategory()
        {
            try
            {
                return Ok(_repo.GetAllSubCategories());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("UpdateCategory")]
        public IActionResult UpdateCategory(Category category)
        {
            try
            {
                _repo.UpdateCategory(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("UpdateSubCategory")]
        public IActionResult UpdateSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.UpdateSubCategory(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{subid}")]
        public IActionResult GetSubCategory(int subid)
        {
            try
            {
                return Ok(_repo.GetSubCategory(subid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory/{cid}")]
        public IActionResult GetCategory(int cid)
        {
            try
            {
                return Ok(_repo.GetCategory(cid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.SellerService.Entity;
using EMart.SellerService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace EMart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("Profile/{sid}")]
        public IActionResult Profile(int sid)
        {
            return Ok(_repo.Profile(sid));
        }
        [HttpPut]
        [Route("Edit")]
        public IActionResult EditProfile(Seller seller)
        {
            try
            {
                _repo.EditProfile(seller);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
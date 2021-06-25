using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.AccountService.Models;
using EMart.AccountService.Repositories;

namespace EmartTestProject
{
    [TestFixture]
    public class TestAccountRepository
    {
        IAccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EMARTDBContext());
        }
        [Test]
        [Description("Test RegisterBuyer()")]
        public void TestBuyerRegister()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Bid = 2356,
                Username = "chand",
                Password = "chand@",
                Email = "chandini@gmail.com",
                Mobileno = "9456783245",
                Datetime = System.DateTime.Now
            });
            var result=_repo.ValidateBuyer("chandinichandu", "chandini@");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test RegisterSeller()")]
        public void TestSellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                Sid = 345,
                Username = "chandu",
                Password = "chandu@",
                Companyname="cognizant",
                Gst=32,
                Aboutcmpy="OK",
                Address="chennai",
                Website="www.cognizant.com",
                Email = "chandus@gmail.com",
                Mobileno = "9456789845"
                
            });
            var result = _repo.ValidateSeller("chandu", "chandu@");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test ValidateBuyer()")]
        public void TestValidateBuyer()
        {
            var result = _repo.ValidateBuyer("chandinichandu", "chandini@");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test ValidateSeller()")]
        public void TestValidateSeller()
        {
            var result = _repo.ValidateSeller("chanduchandini", "chandini@");
            Assert.NotNull(result);
        }
    }
}

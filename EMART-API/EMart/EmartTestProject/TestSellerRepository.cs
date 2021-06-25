using System;
using System.Collections.Generic;
using System.Text;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;
using NUnit.Framework;

namespace EmartTestProject
{
    [TestFixture]
    public class TestSellerRepository
    {
        ISellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EMARTDBContext());
        }
        [Test]
        [Description("Test Profile")]
        public void TestProfile()
        {
            var result = _repo.Profile(2);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test Edit Profile")]
        public void EditProfile()
        {
            Seller seller = _repo.Profile(2);
            seller.Email = "chand@gmail.com";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.Profile(2);
            Assert.AreSame(seller,seller1);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.BuyerService.Models;
using EMart.BuyerService.Repositories;

namespace EmartTestProject
{
    [TestFixture]
   public class TestBuyerRepository
    {
        IBuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EMARTDBContext());
        }
        [Test]
        [Description("Test Get Categories")]
        public void TestGetCategories()
        {
            var result = _repo.GetCategories();
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test Get SubCategories")]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories(142);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test BuyItem")]
        public void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Id = 537,
                Bid = 1234,
                Sid = 2,
                Transactiontype = "Credit",
                Itemid = 7956,
                Noofitems = 1,
                Datetime = System.DateTime.Now,
                Remarks = "Good",
                Transactionstatus="Succeed"
            });
            var result = _repo.ViewOrders(1234);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test BuyerProfile")]
        public void TestProfileBuyer()
        {
            var result = _repo.ProfileBuyer(1235);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test EditProfile")]
        public void TestEditProfileBuyer()
        {
            Buyer buyer = _repo.ProfileBuyer(1235);
            buyer.Email="chand@gmail.com";
            _repo.EditProfileBuyer(buyer);
            Buyer buyer1 = _repo.ProfileBuyer(1235);
            Assert.AreSame(buyer, buyer1);
        }
        [Test]
        [Description("Test Search")]
        public void TestSearch()
        {
            var result = _repo.Search("Barbie");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test ViewOrder")]
        public void TestViewOrders()
        {
            var result = _repo.ViewOrders(1235);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test AddtoCart")]
        public void TestAddToCart()
        {
            _repo.AddtoCart(new Cart()
            {
                Id = 753,
                Categoryid = 142,
                Subcatergoryid = 145,
                Sid = 2345,
                Bid = 1235,
                Itemid = 1114,
                Price = "5000",
                Itemname = "Canon",
                Description = "Electronics",
                Stockno = 734,
                Remarks = "Good",
                Imagename = "camera.jpg"
            });
            var result = _repo.GetCartItems(1235);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test GetCartITems")]
        public void TestGetCartItems()
        {
            var result = _repo.GetCartItems(1234);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test DeleteCartItem")]
        public void TestDeleteCart()
        {
            _repo.DeleteCartItem(753);
            var result = _repo.GetCart(753);
            Assert.Null(result);
        }
    }
}

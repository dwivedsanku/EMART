using System;
using System.Collections.Generic;
using System.Text;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;
using NUnit.Framework;

namespace EmartTestProject
{
    [TestFixture]
    public class TestItemRepository
    {
        IItemRepository _repo;
        [SetUp]
        public  void SetUp()
        {
            _repo = new ItemRepository(new EMARTDBContext());
        }
        [Test]
        [Description("Test AddItem")]
        public void TestAddItem()
        {
            _repo.AddItem(new Items()
            {
                Id = 547,
                Itemname = "efgh",
                Categoryid = 870,
                Subcatergoryid = 145,
                Price = "45362",
                Description = "sdsf",
                Stockno = 353,
                Remarks = "gud",
                Sid = 2,
                Imagename = "panda.jpg"
            });
            var result = _repo.ViewItems(2);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test GetById")]
        public void TestGetById()
        {
            var result = _repo.GetById(547);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test ViewItems")]
        public void TestViewItems()
        {
            var result = _repo.ViewItems(2);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test UpdateITem")]
        public void TestUpdateItem()
        {
            Items items = _repo.GetById(547);
            items.Itemname = "szdfgvs";
            _repo.UpdateItem(items);
            Items items1 = _repo.GetById(547);
            Assert.AreSame(items, items1);
        }
        [Test]
        [Description("Test DeleteItem")]
        public void TestDeleteItem()
        {
            _repo.DeleteItem(547);
            var result = _repo.GetById(547);
            Assert.Null(result);
        }
        [Test]
        [Description("Test GetCategories")]
        public void TestGetCategories()
        {
            var result = _repo.GetCategories();
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test GetSubCategories")]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories(142);
            Assert.NotNull(result);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using EMart.AdminService.Models;
using EMart.AdminService.Repositories;
using NUnit.Framework;

namespace EmartTestProject
{ 
    [TestFixture]
    public class TestAdminRepository
    {
        IAdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EMARTDBContext());
        }
        [Test]
        [Description("Test AddCategory()")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                Cid=4856,
                Cname="Groceries",
                Cdetails="Fruits"
            });
            var result = _repo.GetAllCategories();
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test AddSubCategory()")]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                Subid = 985,
                Cname = "Groceries",
                Subname="Apple",
                Sdetails="Fresh",
                Gst=64,
                Cid=4856
            });
            var result = _repo.GetAllCategories();
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test Delete Category")]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(4856);
            var result = _repo.GetCategory(4856);
            Assert.Null(result);
        }
        [Test]
        [Description("Test Delete SubCategory")]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory(985);
            var result = _repo.GetSubCategory(985);
            Assert.Null(result);
        }
        [Test]
        [Description("Test Category")]
        public void TestGetCategory()
        {
            var result = _repo.GetCategory(870);
            Assert.NotNull(result);
        }
        [Test]
        [Description("Test SubCategory")]
        public void TestGetSubCategory()
        {
            var result = _repo.GetSubCategory(145);
            Assert.NotNull(result);
        }
    }
}

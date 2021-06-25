using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AdminService.Entity;

namespace EMart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        public void AddCategory(Category category);
        public void DeleteCategory(int id);
        public void AddSubCategory(SubCategory subCategory);
        public void DeleteSubCategory(int subid);
        List<Category> GetAllCategories();
        List<SubCategory> GetAllSubCategories();
        Category GetCategory(int cid);
        SubCategory GetSubCategory(int subid);
        public void UpdateCategory(Category category);
        public void UpdateSubCategory(SubCategory subCategory);
    }
}

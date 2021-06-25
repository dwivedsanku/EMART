using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AdminService.Entity;

namespace EMart.AdminService.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartContext _context;
        public AdminRepository(EmartContext context)
        {
            _context = context;
        }
        public void AddCategory(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory subCategory)
        {
            _context.Add(subCategory);
            _context.SaveChanges();
        }

        public void DeleteCategory(int id)
        {
            Category c = _context.Category.Find(id);
            _context.Remove(c);
            _context.SaveChanges();
        }

        public void DeleteSubCategory(int subid)
        {
            SubCategory sub = _context.SubCategory.Find(subid);
            _context.Remove(sub);
            _context.SaveChanges();
        }
        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetAllSubCategories()
        {
            return _context.SubCategory.ToList();
        }
        public void UpdateCategory(Category category)
        {
            _context.Category.Update(category);
            _context.SaveChanges();
        }
        public void UpdateSubCategory(SubCategory subCategory)
        {
            _context.SubCategory.Update(subCategory);
            _context.SaveChanges();
        }
        public Category GetCategory(int cid)
        {
            return _context.Category.Find(cid);
        }
        public SubCategory GetSubCategory(int subid)
        {
            return _context.SubCategory.Find(subid);
        }
    }
}

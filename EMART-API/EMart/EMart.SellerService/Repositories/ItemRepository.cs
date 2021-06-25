using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Entity;

namespace EMart.SellerService.Repositories
{
    public class ItemRepository:IItemRepository
    {
        private readonly EmartContext _context;
        public ItemRepository(EmartContext context)
        {
            _context = context;
        }

        public void AddItem(Items items)
        {
            _context.Add(items);
            _context.SaveChanges();
        }

        public void DeleteItem(int id)
        {
            Items item = _context.Items.Find(id);
            _context.Remove(item);
            _context.SaveChanges();
        }

        public Items GetById(int id)
        {
            return _context.Items.Find(id);
        }

        public void UpdateItem(Items item)
        {
            _context.Items.Update(item);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(int sid)
        {
            return _context.Items.Where(i => i.Sid == sid).ToList();
        }
        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategories(int categoryid)
        {
            return _context.SubCategory.Where(s => s.Cid == categoryid).ToList();
        }
    }
}

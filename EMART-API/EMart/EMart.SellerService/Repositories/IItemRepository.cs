using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Entity;

namespace EMart.SellerService.Repositories
{
   public interface IItemRepository
    {
        List<Items> ViewItems(int sid);
        Items GetById(int sid);
        public void AddItem(Items items);
        public void DeleteItem(int id);
        public void UpdateItem(Items item);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int categoryid);
    }
}

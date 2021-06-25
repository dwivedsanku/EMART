using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.BuyerService.Entity;

namespace EMart.BuyerService.Repositories
{
   public interface IBuyerRepository
    {
        List<Items> Search(string name);
        public void BuyItem(PurchaseHistory item);
        public void EditProfileBuyer(Buyer buyer);
        public Buyer ProfileBuyer(int bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int cid);
       public void AddtoCart(Cart cart);
        List<Cart> GetCartItems(int bid);
       public void DeleteCartItem(int itemid);
        List<PurchaseHistory> ViewOrders(int bid);
        Cart GetCart(int id);
    }
}

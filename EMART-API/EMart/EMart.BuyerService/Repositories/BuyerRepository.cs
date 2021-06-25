using EMart.BuyerService.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartContext _context;
        public BuyerRepository(EmartContext context)
        {
            _context = context;
        }
        public void BuyItem(PurchaseHistory item)
        {
            _context.Add(item);
            _context.SaveChanges();
        }

        public void EditProfileBuyer(Buyer buyer)
        {
            _context.Update(buyer);
            _context.SaveChanges();
        }

        public Buyer ProfileBuyer(int bid)
        {
            return _context.Buyer.Find(bid);
        }

        public List<Items> Search(string name)
        {
          return _context.Items.Where(e => e.Itemname == name).ToList();
            
        }
        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategories(int cid)
        {
            return _context.SubCategory.Where(e=>e.Cid==cid).ToList();
        }

        public void AddtoCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }
        public void DeleteCartItem(int itemid)
        {
            Cart cart = _context.Cart.Find(itemid);
            _context.Cart.Remove(cart);
            _context.SaveChanges();
        }
        public List<Cart> GetCartItems(int bid)
        {
            return _context.Cart.Where(e => e.Bid == bid).ToList();
        }
        public List<PurchaseHistory> ViewOrders(int bid)
        {
            return _context.PurchaseHistory.Where(e => e.Bid == bid).ToList();
        }
        public Cart GetCart(int id)
        {
            return _context.Cart.Find(id);
        }
    }
}

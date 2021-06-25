using EMart.SellerService.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EmartContext _context;
        public SellerRepository(EmartContext context)
        {
            _context = context;
        }

        public void EditProfile(Seller seller)
        {
            _context.Update(seller);
            _context.SaveChanges();

        }
        public Seller Profile(int sid)
        {
            return _context.Seller.Find(sid);
        }
    }
}

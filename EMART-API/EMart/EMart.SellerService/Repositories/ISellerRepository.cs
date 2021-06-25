using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Entity;

namespace EMart.SellerService.Repositories
{
   public interface ISellerRepository
    {
        public void EditProfile(Seller seller);
        public Seller Profile(int sid);
    }
}

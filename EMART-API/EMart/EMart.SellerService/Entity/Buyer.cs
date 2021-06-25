using System;
using System.Collections.Generic;

namespace EMart.SellerService.Entity
{
    public partial class Buyer
    {
        public Buyer()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Bid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Mobileno { get; set; }
        public DateTime? Datetime { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}

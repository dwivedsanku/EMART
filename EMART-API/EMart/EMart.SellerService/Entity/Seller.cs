using System;
using System.Collections.Generic;

namespace EMart.SellerService.Entity
{
    public partial class Seller
    {
        public Seller()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Sid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public int Gst { get; set; }
        public string Aboutcmpy { get; set; }
        public string Address { get; set; }
        public string Website { get; set; }
        public string Email { get; set; }
        public string Mobileno { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}

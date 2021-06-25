using System;
using System.Collections.Generic;

namespace EMart.SellerService.Entity
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public int? Categoryid { get; set; }
        public int? Subcatergoryid { get; set; }
        public string Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int? Stockno { get; set; }
        public string Remarks { get; set; }
        public int? Sid { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller S { get; set; }
        public virtual SubCategory Subcatergory { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}

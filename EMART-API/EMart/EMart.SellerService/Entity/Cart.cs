using System;
using System.Collections.Generic;

namespace EMart.SellerService.Entity
{
    public partial class Cart
    {
        public int Id { get; set; }
        public int? Categoryid { get; set; }
        public int? Subcatergoryid { get; set; }
        public int? Sid { get; set; }
        public int? Bid { get; set; }
        public int? Itemid { get; set; }
        public string Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int? Stockno { get; set; }
        public string Remarks { get; set; }
        public string Imagename { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Category Category { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller S { get; set; }
        public virtual SubCategory Subcatergory { get; set; }
    }
}

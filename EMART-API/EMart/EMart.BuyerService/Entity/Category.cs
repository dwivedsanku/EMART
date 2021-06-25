using System;
using System.Collections.Generic;

namespace EMart.BuyerService.Entity
{
    public partial class Category
    {
        public Category()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int Cid { get; set; }
        public string Cname { get; set; }
        public string Cdetails { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}

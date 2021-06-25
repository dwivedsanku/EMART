using System;
using System.Collections.Generic;

namespace EMart.AdminService.Entity
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
        }

        public int Subid { get; set; }
        public string Subname { get; set; }
        public int? Cid { get; set; }
        public string Sdetails { get; set; }
        public int? Gst { get; set; }

        public virtual Category C { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}

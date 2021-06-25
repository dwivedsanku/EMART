using System;
using System.Collections.Generic;

namespace EMart.SellerService.Entity
{
    public partial class PurchaseHistory
    {
        public int Id { get; set; }
        public int? Bid { get; set; }
        public int? Sid { get; set; }
        public string Transactiontype { get; set; }
        public int? Itemid { get; set; }
        public int? Noofitems { get; set; }
        public DateTime Datetime { get; set; }
        public string Remarks { get; set; }
        public string Transactionstatus { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller S { get; set; }
    }
}

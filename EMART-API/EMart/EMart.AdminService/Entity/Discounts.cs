using System;
using System.Collections.Generic;

namespace EMart.AdminService.Entity
{
    public partial class Discounts
    {
        public int? Id { get; set; }
        public string Code { get; set; }
        public decimal? Percentage { get; set; }
        public DateTime Sdate { get; set; }
        public DateTime Edate { get; set; }
        public string Description { get; set; }
    }
}

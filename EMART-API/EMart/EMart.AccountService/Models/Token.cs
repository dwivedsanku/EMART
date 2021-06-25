using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AccountService
{
    public class Token
    {
        public string uname { get; set; }
        public string token { get; set; }
        public string message { get; set; }
        public int buyerid { get; set; }
        public int sellerid { get; set; }
    }
}

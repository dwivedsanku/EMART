import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
list:PurchaseHistory[]=[];
purchasehistory:PurchaseHistory;
item:Items;
list1:Items[]=[];
  constructor(private service:BuyerService,private route:Router) {
  let id=Number(localStorage.getItem('Bid'))
    this.service.ViewOrders(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }

  ngOnInit() {


  }
  Logout(){
    this.route.navigateByUrl('HOME');
  }
}

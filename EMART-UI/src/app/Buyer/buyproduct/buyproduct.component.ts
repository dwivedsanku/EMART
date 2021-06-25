import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { Buyer } from 'src/app/Models/buyer';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
purchasehistory:PurchaseHistory;
buyer:Buyer;
submitted=false;
payform:FormGroup
list:PurchaseHistory[]=[];
list1:Items[]=[];
item:Items;
date=new Date();
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { 
    this.item=JSON.parse(localStorage.getItem('item'));
  console.log(this.item);
  console.log(this.item.id);
  }

ngOnInit() {
  this.payform=this.formbuilder.group({
    transactiontype:[''],
    cardnumber:[''],
    cvv:[''],
    edate:[''],
    name:[''],
    datetime:[''],
    noofitems:[''],
    remarks:['']
  })
}
onSubmit()
{
this.purchasehistory=new PurchaseHistory();
this.purchasehistory.id=Math.floor(Math.random()*999);
this.purchasehistory.bid=Number(localStorage.getItem('Bid'));
this.purchasehistory.sid=Number(localStorage.getItem('Sid'));
this.purchasehistory.noofitems=Number(this.payform.value["noofitems"]);
this.purchasehistory.itemid=this.item.id;
this.purchasehistory.transactiontype=this.payform.value["transactiontype"]
this.purchasehistory.datetime=this.date;
this.purchasehistory.remarks=this.payform.value["remarks"];
this.list.push(this.purchasehistory);
console.log(this.purchasehistory)
this.service.BuyItem(this.purchasehistory).subscribe(res=>{
     console.log("Purchase was Sucessfull");
     alert('Purchase Done Successfully');
    this.Delete();
   })

}
Delete(){
  console.log(this.item.id);
  let id=this.item.id
  this.service.RemoveCartItem(id).subscribe(res=>{
    console.log('Cart item Removed');
  })
}
Logout(){
  this.route.navigateByUrl('HOME');
}
}

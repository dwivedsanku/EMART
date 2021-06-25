import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  cartlist:Cart[];
  item:Items;
    constructor(private route:Router,private service:BuyerService) {
      let id=Number(localStorage.getItem('Bid'))
      this.service.GetCartItems(id).subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      })
     }
    ngOnInit() {
    }
  BuyNow(item1:Items){
        console.log(item1);
        this.item=item1;
        localStorage.setItem("item1",JSON.stringify(this.item));
        this.route.navigateByUrl('/BUYER/BUY PRODUCT');
  }
  Remove(itemid:number)
  {
    console.log(itemid);
    let id=itemid;
    this.service.RemoveCartItem(id).subscribe(res=>{
      console.log('Item Removed from Cart');
      alert('Item Removed from Cart');
    })
  }
  Logout(){
    this.route.navigateByUrl('HOME');
  }
}

import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemform:FormGroup;
  submitted=false;
  list:Items[]=[];
  item:Items
  num:number;
  cart:Cart;
  list1:Items[]=[];
  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) {
 }

  ngOnInit() {
    this.itemform=this.builder.group({
      itemname:['']
    })
   
  }


  Search()
  {
    
    this.service.Search(this.itemform.value['itemname']).subscribe(res=>
      {
        
       this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      }
      )
  }
  Buy(item:Items){
    console.log(item);
    localStorage.setItem('item',JSON.stringify(item));
    this.route.navigateByUrl('/BUYER/BUY PRODUCT');
  }
  AddtoCart(item2:Items){
    console.log(item2);
   this.cart=new Cart();
   this.cart.id=item2.id;
   this.cart.itemname=item2.itemname;
   this.cart.categoryid=item2.categoryid;
   this.cart.subcatergoryid=item2.subcatergoryid;
   this.cart.sid=item2.sid;
   this.cart.bid=Number(localStorage.getItem('Bid'));
   this.cart.stockno=item2.stockno;
   this.cart.price=item2.price;
   this.cart.itemid=item2.id;
   this.cart.description=item2.description;
   this.cart.remarks=item2.remarks;
   this.cart.imagename=item2.imagename
   console.log(this.cart);
   this.service.AddtoCart(this.cart).subscribe(res=>{
     console.log("Record added To Cart");
     alert('Added To Cart');
   })
  }
  Logout(){
    this.route.navigateByUrl('HOME');
  }
}
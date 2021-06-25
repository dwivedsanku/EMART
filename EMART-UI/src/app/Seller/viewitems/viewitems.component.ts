import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  list:Items[];
  item2:Items;
  seller:Seller;
  list1:Items;
  item1:Items
  constructor(private builder:FormBuilder,private service:SellerService,private route:Router) {
    this.item2=JSON.parse(localStorage.getItem('item'));
    //this.list1.push(this.item)
  //console.log(this.item);
  //console.log(this.item.id);
    let id=Number(localStorage.getItem('Sid'))
    this.service.ViewItems(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }
   ngOnInit() {
    this.itemForm=this.builder.group({
        id:[''],
        categoryid:[''],
        subcatergoryid:[''],
       itemname:[''],
        price:[''],
        stockno:[''],
        description:[''],
        remarks:[''],
        imagename:[''],
        sid:['']
    });
  }
  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Edit()
  {
  this.item1=new Items();
  this.item1.id=Number(this.itemForm.value["id"]),
  this.item1.categoryid=this.item2.categoryid,
  this.item1.subcatergoryid=this.item2.subcatergoryid,
  this.item1.itemname=this.itemForm.value["itemname"],
  this.item1.price=this.itemForm.value["price"],
  this.item1.stockno=Number(this.itemForm.value["stockno"]),
  this.item1.remarks=this.itemForm.value["remarks"],
  this.item1.description=this.itemForm.value["description"],
  this.item1.imagename=this.itemForm.value["imagename"],
  this.item1.sid=Number(localStorage.getItem('Sid'))
  //console.log(this.item);
  this.service.UpdateItem(this.item1).subscribe(res=>{console.log(this.item1),alert("updated succesfully")},err=>{
    console.log(err)
  })
}

  Delete(id:number){
    this.service.DeleteItem(id).subscribe(res=>{
      console.log('Record deleted');
    },
    err=>{
      console.log(err);
    })
  }
  view(id:number)
{
 this.list1=new Items()
  this.service.GetById(id).subscribe(
    res=>{
      this.list1=res;
      console.log(this.list1)
      localStorage.setItem("id",this.list1.id.toString())
      this.itemForm.patchValue({
        id:Number(this.list1.id),
        categoryid:Number(this.list1.categoryid),
        subcatergoryid:Number(this.list1.subcatergoryid),
          itemname:this.list1.itemname,
          price:this.list1.price,
          stockno:Number(this.list1.stockno),
          description:this.list1.description,
          remarks:this.list1.remarks,
          sid:Number(this.list1.sid),
          imagename:this.list1.imagename
        })
      })
    }
    Logout(){
      this.route.navigateByUrl('HOME');
    }
}

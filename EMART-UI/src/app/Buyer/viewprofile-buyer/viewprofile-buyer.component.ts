import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Token } from 'src/app/Models/token';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-viewprofile-buyer',
  templateUrl: './viewprofile-buyer.component.html',
  styleUrls: ['./viewprofile-buyer.component.css']
})
export class ViewprofileBuyerComponent implements OnInit {
  buyer:Buyer
  form:FormGroup;
  id:number;
  item:Items;
      constructor(private frombuilder:FormBuilder,private service:BuyerService,private route:Router) {
        this.id=JSON.parse(localStorage.getItem('Bid')) ;
       }
    
      ngOnInit() {
        this.form=this.frombuilder.group({
          bid:[''],
          username:[''],
          password:[''],
          address:[''],
          datetime:[''],
          mobileno:[''],
          email:['']
        })
        this.buyerprofile()
      }
      buyerprofile()
      {
        this.service.ProfileBuyer(this.id).subscribe(res=>  
          {
            
            this.buyer=res;
            console.log(this.buyer);
            this.form.patchValue({
              bid:Number(this.buyer.bid),
              username:this.buyer.username,
              email:this.buyer.email,
              password:this.buyer.password,
              address:this.buyer.address,
              mobileno:this.buyer.mobileno,
              
            })
           })
      }
      
      Edit()
      {
        this.buyer=new Buyer();
        this.buyer.bid=Number(this.form.value["bid"]),
        this.buyer.username=this.form.value["username"],
        this.buyer.email=this.form.value["email"],
        this.buyer.password=this.form.value["password"],
        this.buyer.mobileno=this.form.value["mobileno"],
        this.service.EditProfileBuyer(this.buyer).subscribe(res=>{console.log(this.buyer),alert("updated succesfully"),this.buyerprofile()},err=>{
          console.log(err)
        })
      }
      Logout(){
        this.route.navigateByUrl('HOME');
      }
}
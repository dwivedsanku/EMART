import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/services/seller.service';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  seller:Seller;
form:FormGroup;
id:number;
item:Items;
    constructor(private frombuilder:FormBuilder,private service:SellerService,private route:Router) {
      this.id=JSON.parse(localStorage.getItem('Sid')) ;
     }
  
    ngOnInit() {
      this.form=this.frombuilder.group({
        sid:[''],
        username:[''],
        password:[''],
        companyname:[''],
        gst:[''],
        aboutcmpy:[''],
        address:[''],
        website:[''],
        mobileno:[''],
        email:['']
      })
      this.sellerprofile()
    }
    sellerprofile()
    {
      this.service.Profile(this.id).subscribe(res=>  
        {
          
          this.seller=res;
          console.log(this.seller);
          this.form.patchValue({
            sid:Number(this.seller.sid),
            username:this.seller.username,
            email:this.seller.email,
            password:this.seller.password,
            aboutcmpy:this.seller.aboutcmpy,
            companyname:this.seller.companyname,
            address:this.seller.address,
            website:this.seller.website,
            gst:Number(this.seller.gst),
            mobileno:this.seller.mobileno,
            
          })
         })
    }
    
    Edit()
    {
      this.seller=new Seller();
      this.seller.sid=Number(this.form.value["sid"]),
      this.seller.username=this.form.value["username"],
      this.seller.email=this.form.value["email"],
      this.seller.password=this.form.value["password"],
      this.seller.aboutcmpy=this.form.value["aboutcmpy"],
      this.seller.companyname=this.form.value["companyname"],
      this.seller.address=this.form.value["address"],
      this.seller.website=this.form.value["website"],
      this.seller.mobileno=this.form.value["mobileno"],
      this.seller.gst=Number(this.form.value["gst"]),
      this.service.EditProfile(this.seller).subscribe(res=>{console.log(this.seller),alert("updated succesfully"),this.sellerprofile()},err=>{
        console.log(err)
      })
    }
    Logout(){
      this.route.navigateByUrl('HOME');
    }
}

  
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';

import {Token} from 'src/app/Models/token';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:User;
submitted=false;
userForm:FormGroup
buyer:Buyer;
seller:Seller;
token:Token;
role: string;
  constructor(private frombuilder:FormBuilder,private service:UserService,private route:Router) { }

  ngOnInit() {
    this.userForm=this.frombuilder.group({
      username:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      password:['',[Validators.required,Validators.pattern("^[A-Za-z]{7,}[!@#$%^&*]")]],
      role:['']
    });
  }
  onSubmitLogin(){
    this.submitted=true;
      
    if(this.userForm.invalid){
     return;
    }
      else {
        this.user=new User();
        this.token=new Token();
        this.seller=new Seller();
        this.buyer=new Buyer();
        let username=this.userForm.value['username']
        let password=this.userForm.value['password']
      console.log(this.user)
      this.service.BuyerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
        if(this.token.message=="Success")
        {
          this.role="buyer";
        }
      });
      this.service.SellerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
        if(this.token.message=="Success")
        {
          this.role="seller";
        }
      });
      }
      }
     public Validate()
      {
        let username=this.userForm.value['username']
        let password=this.userForm.value['password']
        let role=this.userForm.value['role']
        if(username=="admin"&&password=="12345")
        {
          this.route.navigateByUrl('ADMIN')
        }
        if(role=='buyer')
        {
          let token=new Token()
          this.service.BuyerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
            if(this.token.message=="Success")
            {
              alert("welcome")
       console.log(this.token)
          localStorage.setItem("token",this.token.token);
          localStorage.setItem("Bid",this.token.buyerid.toString());
          this.route.navigateByUrl('BUYER')
            }
            else{
              alert("invalid username or password")
              this.onReset();
            }
      });
    }
    if(role=='seller')
    {
      let token=new Token()
      this.service.SellerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
        if(this.token.message=='Success')
        {
          alert("welcome")
       console.log(this.token)
          localStorage.setItem("token",this.token.token);
          localStorage.setItem("Sid",this.token.sellerid.toString());
          this.route.navigateByUrl('SELLER')
        }
        else{
          alert("invalid username or password")
          this.onReset();
        }
  });
}
  }
    get f(){return this.userForm.controls;}
    onReset()
    {
      this.submitted=false;
      this.userForm.reset();
    }
}

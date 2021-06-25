import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
list:Buyer[]=[];
buyer:Buyer;
submitted=false;
buyerForm:FormGroup
  constructor(private frombuilder:FormBuilder,private service:UserService,private route:Router) { }

  ngOnInit() {
    this.buyerForm=this.frombuilder.group({
      username:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      password:['',[Validators.required,Validators.pattern("^[A-Za-z]{7,}[!@#$%^&*]")]],
      mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:['',Validators.required],
      datetime:['',Validators.required]
    });
  }
  onSubmitBuyer(){
    this.submitted=true;
    if(this.buyerForm.invalid){
     return;
    }
      else{
        this.buyer=new Buyer();
      this.buyer.bid=Math.floor(Math.random()*1000);
      this.buyer.username=this.buyerForm.value["username"];
      this.buyer.password=this.buyerForm.value["password"];
      this.buyer.mobileno=this.buyerForm.value["mobileno"];
      this.buyer.email=this.buyerForm.value["email"];
      this.buyer.datetime=this.buyerForm.value["datetime"];
      this.list.push(this.buyer);
      console.log(this.buyer)
     this.service.BuyerRegister(this.buyer).subscribe(res=>
      {
          this.route.navigateByUrl('HOME')
      },err=>{
        console.log(err)
      })
      }
    }
    get f(){return this.buyerForm.controls;}
    onReset()
    {
      this.submitted=false;
      this.buyerForm.reset();
    }
}

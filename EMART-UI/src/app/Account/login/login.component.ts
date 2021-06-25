import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  buyer:Buyer;
  seller:Seller;
  constructor(private frombuilder:FormBuilder) { }

  ngOnInit() {
    
  }

}

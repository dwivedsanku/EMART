import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  bid:number;
    constructor(private service:BuyerService,private formbuilder:FormBuilder,private route:Router) { 
   }
  
    ngOnInit() {
    }  
  Logout(){
    this.route.navigateByUrl('HOME');
  }
}

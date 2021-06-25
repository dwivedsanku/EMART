import { Component, OnInit } from '@angular/core';
import { Contact } from '../Models/contact';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactform:FormGroup;
submitted=false;
contact:Contact;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.contactform = this.formbuilder.group({
      fname: ['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],  
      lname:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],
      email: ['',[Validators.required,Validators.email]],
      message: ['',Validators.required]

    });
  }
  get f()
  {
   return this.contactform.controls;
  }
  onSubmit(){
    this.submitted=true;
      
    if(this.contactform.invalid){
     return;
    }
      else {
        alert('Submitted')
        this.route.navigateByUrl('HOME')
      }
    }
}

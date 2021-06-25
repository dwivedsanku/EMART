import { Component, OnInit } from '@angular/core';
import { Subcategory } from 'src/app/Models/subcategory';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-remove-subcategory',
  templateUrl: './add-remove-subcategory.component.html',
  styleUrls: ['./add-remove-subcategory.component.css']
})
export class AddRemoveSubcategoryComponent implements OnInit {
list:Subcategory[]=[];
subcategory:Subcategory;
submitted=false;
subcategoryForm:FormGroup;
category:Category;
list1:Category[]=[];
  constructor(private frombuilder:FormBuilder,private service:AdminService,private route:Router) {
    this.category=JSON.parse(localStorage.getItem('category'));
   }


  ngOnInit() {
    this.subcategoryForm=this.frombuilder.group({
      subname:['',Validators.required],
      cname:['',Validators.required],
      sdetails:['',Validators.required],
      gst:['',Validators.required]
    });

  }
  SubCategory(){
    this.service.GetAllSubCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    });
  }
  onSubmitAdd(){
    this.submitted=true;
    if(this.subcategoryForm.invalid){
     return;
    }
      else{
        this.subcategory=new Subcategory();
      this.subcategory.subid=Math.floor(Math.random()*1000);
      this.subcategory.subname=this.subcategoryForm.value["subname"];
      this.subcategory.cname=this.subcategoryForm.value["cname"];
      this.subcategory.sdetails=this.subcategoryForm.value["sdetails"];
      this.subcategory.cid=this.category.cid;
      this.subcategory.gst=Number(this.subcategoryForm.value["gst"]);
      this.list.push(this.subcategory)
      console.log(this.subcategory);
    this.service.AddSubCategory(this.subcategory).subscribe(res=>
      {
        this.route.navigateByUrl('ADMIN')
      },err=>{
        console.log(err)
      })
      }
    }
    Delete(subid:number){
      this.service.DeleteSubCategory(subid).subscribe(res=>{
        console.log('Record deleted');
        this.route.navigateByUrl('ADMIN')
      },
      err=>{
        console.log(err);
      })
    }   
     get f(){return this.subcategoryForm.controls;}
    onReset()
    {
      this.submitted=false;
      this.subcategoryForm.reset();
    }
    Logout(){
      this.route.navigateByUrl('HOME');
    }
}

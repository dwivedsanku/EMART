import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Subcategory } from 'src/app/Models/subcategory';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  list:Items[]=[];
  items:Items;
  categorylist:Category[]=[];
  category:Category;
  subcategorylist:Subcategory[]=[];
  subcategory:Subcategory;
  sform:FormGroup;
  submitted=false;
  name:string;
  img:string;
  selectedFile : File = null;
  constructor(private formBuilder:FormBuilder ,private service:SellerService,private route:Router) {
      this.service.GetCategories().subscribe(res=>
        {
          this.categorylist=res;
          console.log(this.categorylist);
        },
        err=>{
          console.log(err);
        }
        )
  
      }
    
  
    ngOnInit() {
      this.sform=this.formBuilder.group({
          categoryid:[''],
          subcatergoryid:[''],
            price:['',Validators.required],
              itemname:['',Validators.required],
              description:['',Validators.required],
              stockno:['',Validators.required],
              remarks:['',Validators.required],
              //sid:['',Validators.required],
              imagename:['',Validators.required]
        
      });
    }
    Onsubmit()
      {
        this.submitted=true;
        if(this.sform.valid)
        {
          this.AddItem();
        }
      }
  AddItem()
  {
    this.items=new Items();
    this.items.id=Math.floor(Math.random()*10000)
    this.items.categoryid=Number(this.sform.value["categoryid"]),
    this.items.subcatergoryid=Number(this.sform.value["subcatergoryid"]),
    this.items.price=this.sform.value["price"],
    this.items.itemname=this.sform.value["itemname"],
    this.items.description=this.sform.value["description"],
    this.items.stockno=this.sform.value["stockno"],
    this.items.remarks=this.sform.value["remarks"]
    this.items.imagename=this.img;
    this.items.sid=Number(localStorage.getItem('Sid'));
    this.service.AddItem(this.items).subscribe(res=>{console.log(this.items),this.Reset()},err=>{console.log(err)}) 
    
  }
  GetSubCategories()
  {
    //let cid=this.AddItemsForm.value["cid"]
    this.service.GetSubCategories(this.sform.value["categoryid"]).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    },err=>{
      console.log(err)
    })
    }
  get f()
  {
    return this.sform.controls;
  }
    Reset()
    {
      alert("Items Added Succesfully");
      this.submitted=false;
      this.sform.reset();
      this.route.navigateByUrl('VIEW ITEMS')
  
    }
    fileEvent(event){
      this.img= event.target.files[0].name;
    }
    Logout(){
      this.route.navigateByUrl('HOME');
    }
  }

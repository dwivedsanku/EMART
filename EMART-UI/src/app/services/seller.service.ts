import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../Models/items';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  url:string='https://emartsellerservice20210624204857.azurewebsites.net/api/Item/'
  public ViewItems(id:number):Observable<Items[]>
  {
     return this.http.get<Items[]>(this.url+'ViewItems/'+id,Requestheaders);
  }
  public AddItem(items:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItem',JSON.stringify(items),Requestheaders);
  }
  public UpdateItem(item:Items):Observable<any>
  {
     
     return this.http.put<any>(this.url+'UpdateItem',item,Requestheaders)
  }
  public DeleteItem(id:number):Observable<any>
  {
     
     return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders)
  }
  public GetById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+'GetById/'+id,Requestheaders)
  }
  public GetCategories():Observable<Category[]>
  {
     return this.http.get<Category[]>(this.url+'category',Requestheaders)
  }
  public GetSubCategories(categoryid:number):Observable<Subcategory[]>
  {
     return this.http.get<Subcategory[]>(this.url+'subcategory/'+categoryid,Requestheaders)
  }
  url1:string='https://emartsellerservice20210624204857.azurewebsites.net/api/Seller/'
  public Profile(sid:number):Observable<any>
  {
    return this.http.get<any>(this.url1+'Profile/'+sid,Requestheaders)
  }
  public EditProfile(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url1+'Edit',seller,Requestheaders)
  }
}


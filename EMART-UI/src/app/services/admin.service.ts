import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../Models/category';
import { Observable } from 'rxjs';
import { Subcategory } from '../Models/subcategory';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  url:string='https://emartadminservice20210624202634.azurewebsites.net/api/Admin/'
  public AddCategory(category:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategory',JSON.stringify(category),Requestheaders);
  }
  public AddSubCategory(subcategory:Subcategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(subcategory),Requestheaders);
  }
  public DeleteCategory(cid:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCategory/'+cid,Requestheaders);
  }
  public DeleteSubCategory(subid:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteSubCategory/'+subid,Requestheaders);
  }
  public GetAllCategories():Observable<Category[]>
  {
     return this.http.get<Category[]>(this.url+'GetCategory',Requestheaders)
  }
  public GetAllSubCategories():Observable<Subcategory[]>
  {
     return this.http.get<Subcategory[]>(this.url+'GetSubCategory',Requestheaders)
  }
}

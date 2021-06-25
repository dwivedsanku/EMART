import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Items } from '../Models/items';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }
  url4:string='https://emartbuyerservice20210624204609.azurewebsites.net/api/Buyer/'
  public ProfileBuyer(bid:number):Observable<any>
  {
    return this.http.get<any>(this.url4+'Profile/'+bid,Requestheaders)
  }
  public EditProfileBuyer(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url4+'Edit',buyer,Requestheaders)
  }
  public Search(name:string):Observable<any>
  {
    return this.http.get<any>(this.url4+'Search/'+name,Requestheaders)
  }
  public ViewItem(name:string):Observable<Items[]>
  {
     return this.http.get<Items[]>(this.url4+'ViewItems/'+name,Requestheaders);
  }
  public BuyItem(purchase:PurchaseHistory):Observable<any>
  {
    return this.http.post<any>(this.url4+'BuyItem',purchase)
  }
  public AddtoCart(cart:Cart):Observable<any>{
    return this.http.post<any>(this.url4+'AddtoCart',cart,Requestheaders);
  }
  public GetCartItems(id:number):Observable<any>
  {
    return this.http.get<any>(this.url4+'GetCartItems/'+id,Requestheaders);
  }
  public RemoveCartItem(itemid:number):Observable<any>
  {
    return this.http.delete<any>(this.url4+'DeleteCartItem/'+itemid,Requestheaders);
  }
  public ViewOrders(id:number):Observable<any>
  {
    return this.http.get<any>(this.url4+'ViewOrders/'+id,Requestheaders);
  }
}

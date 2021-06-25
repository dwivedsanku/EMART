import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ReportsComponent } from './Seller/reports/reports.component';
import { ViewprofileComponent } from './Seller/viewprofile/viewprofile.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockOrUnblockBuyerComponent } from './Admin/block-or-unblock-buyer/block-or-unblock-buyer.component';
import { BlockOrUnblockSellerComponent } from './Admin/block-or-unblock-seller/block-or-unblock-seller.component';
import { AddRemoveCategoryComponent } from './Admin/add-remove-category/add-remove-category.component';
import { AddRemoveSubcategoryComponent } from './Admin/add-remove-subcategory/add-remove-subcategory.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { ViewprofileBuyerComponent } from './Buyer/viewprofile-buyer/viewprofile-buyer.component';
import { HomeComponent } from './Account/home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'SELLER',component:SellerLandingPageComponent,children:[
    {path:'ADD ITEMS',component:AdditemsComponent},
    {path:'VIEW ITEMS',component:ViewitemsComponent},
    {path:'VIEW REPORTS',component:ReportsComponent},
    {path:'VIEW PROFILE',component:ViewprofileComponent}]},
    {path:'BUYER',component:BuyerLandingPageComponent,children:[
    {path:'SEARCH ITEMS',component:SearchComponent},
    {path:'VIEW CART',component:ViewcartComponent},
    {path:'PURCHASE-HISTORY',component:PurchasehistoryComponent},
    {path:'BUY PRODUCT',component:BuyproductComponent},
    {path:'VIEW PROFILE-BUYER',component:ViewprofileBuyerComponent}]},
     {path:'ADMIN',component:AdminLandingPageComponent,children:[
    {path:'BLOCK/UNBLOCK-BUYER',component:BlockOrUnblockBuyerComponent},
    {path:'BLOCK/UNBLOCK-SELLER',component:BlockOrUnblockSellerComponent},
    {path:'ADD/REMOVE-CATEGORY',component:AddRemoveCategoryComponent},
    {path:'ADD/REMOVE-SUBCAT',component:AddRemoveSubcategoryComponent},
    {path:'DAILY-REPORTS',component:DailyreportsComponent}]},
  {path:'REGISTER-BUYER',component:RegisterBuyerComponent},
  {path:'REGISTER-SELLER',component:RegisterSellerComponent},
  {path:'LOGIN',component:LoginComponent},
  {path:'HOME',component:HomeComponent},
  {path:'CONTACT',component:ContactComponent},
  {path:'',redirectTo:'HOME',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

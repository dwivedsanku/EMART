import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Buyer/search/search.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ReportsComponent } from './Seller/reports/reports.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockOrUnblockBuyerComponent } from './Admin/block-or-unblock-buyer/block-or-unblock-buyer.component';
import { BlockOrUnblockSellerComponent } from './Admin/block-or-unblock-seller/block-or-unblock-seller.component';
import { AddRemoveCategoryComponent } from './Admin/add-remove-category/add-remove-category.component';
import { AddRemoveSubcategoryComponent } from './Admin/add-remove-subcategory/add-remove-subcategory.component';
import { DailyreportsComponent } from './Admin/dailyreports/dailyreports.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { ViewprofileBuyerComponent } from './Buyer/viewprofile-buyer/viewprofile-buyer.component';
import { ViewprofileComponent } from './Seller/viewprofile/viewprofile.component';
import { HomeComponent } from './Account/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RegisterBuyerComponent,
    RegisterSellerComponent,
    LoginComponent,
    ViewcartComponent,
    PurchasehistoryComponent,
    BuyproductComponent,
    SellerLandingPageComponent,
    AdditemsComponent,
    ViewitemsComponent,
    ReportsComponent,
    AdminLandingPageComponent,
    BlockOrUnblockBuyerComponent,
    BlockOrUnblockSellerComponent,
    AddRemoveCategoryComponent,
    AddRemoveSubcategoryComponent,
    DailyreportsComponent,
    BuyerLandingPageComponent,
    ViewprofileBuyerComponent,
    ViewprofileComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

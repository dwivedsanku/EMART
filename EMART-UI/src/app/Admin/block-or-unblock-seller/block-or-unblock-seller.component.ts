import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-or-unblock-seller',
  templateUrl: './block-or-unblock-seller.component.html',
  styleUrls: ['./block-or-unblock-seller.component.css']
})
export class BlockOrUnblockSellerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  Logout(){
    //localStorage.clear();
    this.route.navigateByUrl('HOME');
  }
}

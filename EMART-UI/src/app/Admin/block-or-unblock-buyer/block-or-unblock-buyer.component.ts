import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-or-unblock-buyer',
  templateUrl: './block-or-unblock-buyer.component.html',
  styleUrls: ['./block-or-unblock-buyer.component.css']
})
export class BlockOrUnblockBuyerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  Logout(){
   // localStorage.clear();
    this.route.navigateByUrl('HOME');
  }
}

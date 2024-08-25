import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: 'productDetail.component.html',
  imports: [
    RouterLink
  ],
})
export class ProductDetailComponent implements OnInit {

  ngOnInit() {
    
  }
}

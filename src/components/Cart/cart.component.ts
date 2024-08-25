import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: 'cart.component.html',
  imports: [
    RouterLink
  ],
})
export class CartComponent implements OnInit {

  ngOnInit() {
    
  }
}

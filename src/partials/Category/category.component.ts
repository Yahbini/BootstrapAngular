import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'category',
  standalone: true,
  templateUrl: 'category.component.html',
  imports: [
    RouterLink
  ],
})
export class CategoryComponent implements OnInit {

  ngOnInit() {
    
  }
}

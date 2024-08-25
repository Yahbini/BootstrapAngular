import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'search',
  standalone: true,
  templateUrl: 'search.component.html',
  imports: [
    RouterLink
  ],
})
export class SearchComponent implements OnInit {

  ngOnInit() {
    
  }
}

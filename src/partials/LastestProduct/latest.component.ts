import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'latest',
  standalone: true,
  templateUrl: 'latest.component.html',
  imports: [
    RouterLink
  ],
})
export class LatestComponent implements OnInit {

  ngOnInit() {
    
  }
}

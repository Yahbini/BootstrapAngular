import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchComponent } from '../partials/Search/search.component';
import { CategoryComponent } from '../partials/Category/category.component';
import { LatestComponent } from '../partials/LastestProduct/latest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    RouterOutlet,
    RouterLink,
    SearchComponent,
    CategoryComponent,
    LatestComponent
  ],
})
export class AppComponent {
}

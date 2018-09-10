import { Component } from '@angular/core';
import { Nav } from './nav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/tacos',
      name: 'Tacos',
      exact: false
    }
  ];

  constructor() {
    this.title = 'Taco Fancy 🌮';
  }
}

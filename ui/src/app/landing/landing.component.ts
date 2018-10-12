import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nav } from '../nav.model';
import { UserService } from '../security/user.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  tacos: Nav = {
    link: '/tacos',
    name: 'Tacos',
    exact: true
  };
  layers: Nav = {
    link: '/layers',
    name: 'Layers',
    exact: false
  };
  account: Nav = {
    link: '/login',
    name: 'Login',
    exact: false
  };
  constructor(private router: Router, public userService: UserService) {
    if (this.userService.isLoggedIn === true) {
      this.account.link = '/logout';
      this.account.name = 'Logout';
    } else {
      this.account.link = '/login';
      this.account.name = 'Login';
    }
  }

  ngOnInit() {}
  goto(link) {
    this.router.navigate([link]);
  }
}

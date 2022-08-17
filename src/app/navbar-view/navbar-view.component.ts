import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html',
  styleUrls: ['./navbar-view.component.scss']
})
export class NavbarViewComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  goToMovies(): void {
    this.router.navigate(["movies"]);
  }

  goToProfile(): void {
    this.router.navigate(["profile"]);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["welcome"]);
  }

}
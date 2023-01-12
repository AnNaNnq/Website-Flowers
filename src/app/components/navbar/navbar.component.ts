import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  displayMenu!: boolean;
  router!: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.displayMenu = false;
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
  }

  goToMenu() {
    this.router.navigateByUrl('/accueil');
  }
}

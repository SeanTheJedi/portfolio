import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuCollapsed = true;

  jump(section:any) {
    this.isMenuCollapsed = true
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }
}

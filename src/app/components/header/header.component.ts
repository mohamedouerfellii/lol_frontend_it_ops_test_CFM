import {AfterViewInit, Component, HostListener} from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  openMenu: boolean = false;
  lastScrollTop = 0;
  isHeaderHidden = false;


  showAndHideMenu() {
    this.openMenu = !this.openMenu;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isHeaderHidden = currentScroll > this.lastScrollTop;
    this.lastScrollTop = Math.max(0, currentScroll);
  }


}

import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public opened = false;
  public backdropEnabled = true;

  constructor() { }

  public toggleSidebar() {
    this.opened = !this.opened;
  }

  public toggleBackdrop() {
    this.backdropEnabled = !this.backdropEnabled;
  }
}

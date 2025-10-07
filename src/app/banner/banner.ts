import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  showBanner: boolean = true;

  toggleBanner(): void {
    this.showBanner = !this.showBanner;
  }

}

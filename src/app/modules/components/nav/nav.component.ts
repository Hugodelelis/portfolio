import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  button = document.querySelector('#menu-list')
  IsActive: boolean = false

  menu() {
    if(!this.IsActive) {
      this.IsActive = true
    } else {
      this.IsActive = false
    }
  }
}

import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavComponent, HomeComponent, AboutComponent, FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}

import { Component, signal } from '@angular/core';
import ITecnologies from '../../interfaces/Itec.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public tecnologies = signal<ITecnologies[]>([
    {
      tec: {
        name: 'Angular',
        src: 'assets/icons/angular.svg',
        alt: 'Angular',
        percent: '75%'
      }
    },

    {
      tec: {
        name: 'TypeScript',
        src: 'assets/icons/typescript.svg',
        alt: 'TypeScript',
        percent: '80%'
      }
    },

    {
      tec: {
        name: 'Bootstrap',
        src: 'assets/icons/bootstrap.svg',
        alt: 'Bootstrap',
        percent: '90%'
      }
    },

    {
      tec: {
        name: 'Sass',
        src: 'assets/icons/sass.svg',
        alt: 'Sass',
        percent: '90%'
      }
    },
  ]);
}


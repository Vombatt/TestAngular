import {Component} from '@angular/core';

import {TextContent} from './classes/TextContent';
import {SWIPERS} from './mocks/swiper-mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  swiperDivs: Array<TextContent> = SWIPERS;

  constructor() {
  }

}

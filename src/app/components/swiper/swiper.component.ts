import {Component, Input} from '@angular/core';
import {TextContent} from '../../classes/TextContent';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {
  @Input()  content: Array<TextContent>;

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };



  constructor() {
  //   this.swiperDivs = [
  //     {
  //       title: 'Welcome to our web site',
  //       description: 'Lorem ipsum dolor sit amet, consectetur ' +
  //       'adipiscing elit. Nulla pellentesque urna sit amet turpis vehicula, maximus aliquam urna pulvinar. In.'
  //     },
  //     {
  //       title: 'Second title',
  //       description: 'Lorem ipsum dolor sit amet, consectetur ' +
  //       'adipiscing elit. Nulla pellentesque urna sit amet turpis vehicula, maximus aliquam urna pulvinar. In.'
  //     }
  //   ]
  }
}

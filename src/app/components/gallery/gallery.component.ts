import { Component, OnInit } from '@angular/core';
import {ITEMS} from '../../mocks/galeryItem-mock';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galeryItems = ITEMS;
  constructor() { }

  ngOnInit() {
  }

}

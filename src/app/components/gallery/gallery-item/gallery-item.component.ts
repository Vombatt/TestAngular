import {Component, Input, OnInit} from '@angular/core';
import {GalleryItem} from '../../../classes/GalleryItem';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() content: GalleryItem;
  constructor() { }

  ngOnInit() {
  }

}

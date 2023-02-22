import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() items!: any[];
  @Input() itemIndex!: any;
  @Input() itemTemplate!: string;
  @Input() imgText!: string;
  @Input() imgSrc!: string;
  @Input() showNavButtons!: boolean;
  @Input() showIndicator!: boolean;
  @Input() height!: number;

  constructor() { }

}

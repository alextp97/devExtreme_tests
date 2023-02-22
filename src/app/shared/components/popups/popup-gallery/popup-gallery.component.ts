import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-gallery',
  templateUrl: './popup-gallery.component.html',
  styleUrls: ['./popup-gallery.component.scss'],
})
export class PopupGalleryComponent {
  
  @Input() visible!: boolean;
  @Input() title!: string;
  @Input() contentTemplate!: string;
  @Input() resizable!: boolean;
  @Input() closeOnOutsideClick!: boolean;
  @Input() arrayImages: any[] = [];
  @Input() showCloseButton!: boolean;
  @Input() rowIndex!: number;

  @Output() emitVisible = new EventEmitter<boolean>();

  constructor() {}

  sendPropVisible() {
    this.emitVisible.emit(false);
  }

}

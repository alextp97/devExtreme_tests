import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() shadingColor!: string;
  @Input() visible!: boolean;
  @Input() showIndicator!: boolean;
  @Input() showPane!: boolean;
  @Input() shading!: boolean;
  @Input() hideOnOutsideClick!: boolean;

  @Output() emitVisible = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onHidden() {
    this.emitVisible.emit(false);
  }


}

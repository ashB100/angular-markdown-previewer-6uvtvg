import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-width-toggle',
  templateUrl: './width-toggle.component.html',
  styleUrls: ['./width-toggle.component.css']
})
export class WidthToggleComponent {
  @Input() isMinimised: boolean;
  @Output() toggleWidth = new EventEmitter<boolean>();

  constructor() { }

  toggle() {
    this.toggleWidth.emit(!this.isMinimised)
  }

}
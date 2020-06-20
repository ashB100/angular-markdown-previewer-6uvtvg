import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-width-toggle',
  templateUrl: './width-toggle.component.html',
  styleUrls: ['./width-toggle.component.css']
})
export class WidthToggleComponent {
  @Input() isMinimised: boolean;
  @Output() toggleMinimise = new EventEmitter<boolean>();

  constructor() { }

  onToggleMinimise() {
    this.toggleMinimise.emit(!this.isMinimised)
  }

}
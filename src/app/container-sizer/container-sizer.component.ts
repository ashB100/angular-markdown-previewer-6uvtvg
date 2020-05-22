import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-sizer',
  templateUrl: './container-sizer.component.html',
  styleUrls: ['./container-sizer.component.css']
})
export class ContainerSizerComponent {
  @Input() isMinimised: boolean;
  @Output() toggleMinimise = new EventEmitter<boolean>();

  constructor() { }

  onToggleMinimise() {
    this.toggleMinimise.emit(!this.isMinimised)
  }

}
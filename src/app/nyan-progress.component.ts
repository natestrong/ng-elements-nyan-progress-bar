import {Component, Input, OnInit} from '@angular/core';

@Component({
  // selector: 'nyan-progress',
  template: `
    progress: {{ progress }}
  `,
  styles: []
})
export class NyanProgressComponent implements OnInit {
  @Input() progress: number;

  constructor() {
  }

  ngOnInit(): void {

  }
}

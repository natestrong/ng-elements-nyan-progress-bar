import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Nyan Progress</h1>
    <br>
    <div id="container"></div>
    <br>
    <button (click)="addNyanProgress()">Add Progress</button>
  `
})
export class AppComponent {
  addNyanProgress(): void {
    const container = document.getElementById('container');
    container.innerHTML = '<nyan-progress></nyan-progress>';
  }
}


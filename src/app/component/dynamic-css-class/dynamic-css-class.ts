import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
  myClassName: string = 'bg-warning'

  isActive: boolean = false;

  productPrice: number = 5000;

  divBackColor: string = '';

  myCSS = {
    color: 'red',
    'background-color': 'black',
    'font-size': '35px'
  }

  isSidePanel = signal(false);

  openSidePanel() {
    this.isSidePanel.set(true);
  }

  closeSidePanel() {
    this.isSidePanel.set(false);
  }
}

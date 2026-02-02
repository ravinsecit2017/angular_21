import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../service/master';

@Component({
  selector: 'app-data-bindings',
  imports: [FormsModule],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css',
})
export class DataBindings {
  masterSrv = inject(Master)
  constructor() {
      const result = this.masterSrv.addTwoNum(10,17);
      console.log('data bindings', result);
    }

  courseName: string = 'Angular version 21';
  cityName = 'Nagpur';

  className = 'primary';
  inputType = 'radio'

  showWelcomeMessage() {
    alert( 'Welcome to Angular version 21');
  }

  onStateChanged() {
    alert( 'State changed');
  }

  changeCourseName(text: string) {
    this.courseName = text;
  }
}


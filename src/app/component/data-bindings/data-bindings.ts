import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindings',
  imports: [FormsModule],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css',
})
export class DataBindings {
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


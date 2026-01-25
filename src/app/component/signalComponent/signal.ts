import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
  // courseName: string = 'Angular 21';
  courseName = signal('Angular 21');

  rollNo = signal(123);
  student = signal({name: 'Ravi', city: 'Gaya'});
  cityList = signal(['Gaya', 'Kolkata', 'Mumbai', 'Chennai'])

  courseDuration: Signal<string> = signal('4 Months')

  constructor() {
    console.log('Before setTimeout->', this.courseName())
    setTimeout(() => {
      this.courseName.set('React JS')
      console.log('After setTimeout->', this.courseName())
    }, 3000)
  }

  changeCourse() {
    this.courseName.set('Java')
  }
}

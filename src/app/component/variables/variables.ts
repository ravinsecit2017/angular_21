import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  courseName: string = 'Angular';
  currentVersion = 'v21.1';
  rollNo: number = 134;
  productPrice = 1200.0;
  isActive: boolean = false;
  isPresent = true;
  currentDate: Date = new Date();

  cityList: string[] = ['Gaya', 'Kolkata', 'Jaipur', 'Indore'];
  rollNoArray: number[] = [111, 123, 143, 234, 125];

  studObj = {
    name: 'Ravi',
    mobile: '8217737623',
    email: 'ravinsecit2017@gmail.com'
  }

  sudentList = [
    {name: 'Ravi', city: 'Gaya'},
    {name: 'Aarav', city: 'Kolkata'},
    {name: 'Ram', city: 'Indore'}
  ]

  constructor() {
    this.courseName = 'Gaya';
    this.rollNo = 7364;
    this.cityList = ['Gaya', 'Gaya', 'Gaya'];
  }
}

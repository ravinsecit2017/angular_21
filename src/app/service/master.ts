import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  // store data
  // create api call functions
  // create subject or bahaviour subject
  //utility function, helper

  addTwoNum(num1: number, num2: number) {
    const sum = num1 + num2;
    return sum;
  }
}

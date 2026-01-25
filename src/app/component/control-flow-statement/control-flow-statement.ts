import { NgClass } from '@angular/common';
import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-statement',
  imports: [FormsModule, NgClass],
  templateUrl: './control-flow-statement.html',
  styleUrl: './control-flow-statement.css',
})
export class ControlFlowStatement {
  isOffercodeAvl: boolean = false;
  studentTotalMark: number = 0;

  isSuccessDivVisible: WritableSignal<boolean> = signal(false);

  offerList: string[] = [
    "20% for Paytm",
    "25% for GPay",
    "15% for ICICI Credit card",
    "10% for online banking"
  ]

  productcategoryList: string[] = ["Mobile", "Camera", "Earphone", "Headphone", "Charger"]
  
  employeeList = [
    {name: "Ravi", city: "Gaya", isActive: false},
    {name: "Aarav", city: "Kolkata", isActive: false},
    {name: "Sheela", city: "Pune", isActive: true},
    {name: "Shiv", city: "Chennai", isActive: true},
    {name: "Ranveer", city: "Bangalore", isActive: true},
    {name: "Ram", city: "Patna", isActive: false}
  ]

  changeDiv() {
    this.isSuccessDivVisible.set(true);
  }
}

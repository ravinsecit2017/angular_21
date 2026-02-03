import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-app',
  imports: [FormsModule],
  templateUrl: './employee-app.html',
  styleUrl: './employee-app.css',
})
export class EmployeeApp implements OnInit{
  newEmplObj: any = {
  "employeeId": 0,
  "fullName": "",
  "email": "",
  "phone": "",
  "gender": "",
  "dateOfJoining": "",
  "departmentId": 0,
  "designationId": 0,
  "employeeType": "",
  "salary": 0
  } 

  http = inject(HttpClient);
  departmentList = signal<any[]>([]);
  designationList = signal<any[]>([]);

  ngOnInit(): void {
    this.getDepartment();
  }

  getDepartment() {
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments").subscribe({
      next: (data: any) => {
        console.log(data);
        this.departmentList.set(data);
      }
    })
  }

  getDesignationByDeptId() {
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=" +this.newEmplObj.departmentId).subscribe({
      next: (data: any) => {
        console.log(data);
        this.designationList.set(data);
      }
    })
  }
}

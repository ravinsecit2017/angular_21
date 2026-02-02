import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjectCompetitionSrvc } from '../../service/project-competition';

export interface Competition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;   // ISO date string
  endDate: string;     // ISO date string
  status: string;
}

@Component({
  selector: 'app-project-competition',
  imports: [ReactiveFormsModule],
  templateUrl: './project-competition.html',
  styleUrl: './project-competition.css',
})
export class ProjectCompetition {
  projectForm: FormGroup = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl('')
  });

  http = inject(HttpClient);
  projectCompSrvc = inject(ProjectCompetitionSrvc)
  competitionList = signal<Competition[]>([]);
  constructor() { 
    this.getAllCompetitions();
  }

  getAllCompetitions() {
    this.projectCompSrvc.getAllCompetitionData().subscribe({
      next: (data: any) => {
        console.log(data);
        this.competitionList.set(data);
      }
    })
  }

  saveCompetition() {
    const formValue = this.projectForm.value;
    this.projectCompSrvc.saveData(formValue).subscribe({
      next: (data: any) => {
        console.log(data);
        alert('Competition saved successfully');
        this.getAllCompetitions();
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    });
  }

  onEdit(item: Competition) {
    this.projectForm = new FormGroup({
      competitionId: new FormControl(item.competitionId),
      title: new FormControl(item.title),
      description: new FormControl(item.description),
      startDate: new FormControl(item.startDate),
      endDate: new FormControl(item.endDate),
      status: new FormControl(item.status)
    })
  }

  updateCompetition() {
    const formValue = this.projectForm.value;
    this.projectCompSrvc.updateData(formValue).subscribe({
      next: (data: any) => {
        console.log(data);
        alert('Competition saved successfully');
        this.getAllCompetitions();
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    });
  }

  deleteCompetition(id: number) {
    const isConfirmed = confirm('Are you sure to delete this competition?');
    if (isConfirmed) {
      this.http.delete('https://api.freeprojectapi.com/api/ProjectCompetition/delete/' + id).subscribe({
      next: (data: any) => {
        console.log(data);
        alert('Competition deleted successfully');
        this.getAllCompetitions();
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    });
    }
    
  }
}

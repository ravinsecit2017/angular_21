import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectCompetitionSrvc {
  http = inject(HttpClient);
  projectCompApi = 'https://api.freeprojectapi.com/api/ProjectCompetition/'

  getAllCompetitionData() {
    return this.http.get(this.projectCompApi + 'GetAllCompetition');
  }

  saveData(formData: any) {
    return this.http.post('https://api.freeprojectapi.com/api/ProjectCompetition/competition', formData)
  }

  updateData(formData: any) {
    return this.http.put('https://api.freeprojectapi.com/api/ProjectCompetition/update/' + formData.competitionId, formData)
  }

  deleteData(id: any) {
    this.http.delete('https://api.freeprojectapi.com/api/ProjectCompetition/delete/' + id)
  }
}



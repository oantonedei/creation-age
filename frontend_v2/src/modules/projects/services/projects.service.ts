import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IMediaState from '@modules/explore/models/IMediaState.interface';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import IContractState from '../models/IContractState.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  SERVER = environment.SERVER;

  constructor(private http: HttpClient) { }

  createProject(project: {
    name: string;
    description: string;
    industry: string;
    phase: string;
    status: string;
  }) {
    return this.http.post<{
      success: boolean;
      results: IMediaState;
    }>(this.SERVER + '/api/users/projects', project);
  }
  getAllProjects(id: string) {
    return this.http
      .get<{
        success: boolean;
        results: IMediaState[];
      }>(this.SERVER + '/api/media/user/' + id)
      .pipe(map((response) => response.results));
  }

  getMediaById(_id: string) {
    return this.http
      .get<{ success: boolean; results: IMediaState, contracts: IContractState[]; }>(
        this.SERVER + '/api/media/' + _id
      );
  }

  getContracts(id: string) {
    return this.http.get<{ success: boolean; contracts: IContractState[]; }>(
      this.SERVER + '/api/contracts/' + id
    ).pipe(map((response) => response.contracts));
  }
  
  addParticipant(_id: string, participant: { skill: string, percentage_offered: number, contract_type: string }) {
    return this.http.post<{ success: boolean; results: IMediaState, contract: IContractState }>(
      this.SERVER + '/api/media/addteam/' + _id,
      participant
    );
  }

}

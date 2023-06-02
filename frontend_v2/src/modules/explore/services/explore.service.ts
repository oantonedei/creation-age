import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import IMediaState from '../models/IMediaState.interface';
import { map } from 'rxjs';
import IContractState from '@modules/projects/models/IContractState.interface';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  SERVER = environment.SERVER;

  constructor(private http: HttpClient) {}

  getAllMedia() {
    return this.http
      .get<{ success: boolean; results: IMediaState[] }>(
        this.SERVER + '/api/media'
      )
      .pipe(
        map((response) => {
          return response.results;
        })
      );
  }

  getMediaById(_id: string) {
    return this.http.get<{
      success: boolean;
      results: IMediaState;
      contracts: IContractState[];
    }>(this.SERVER + '/api/media/' + _id);
  }

  getLineage(id: string) {
    return this.http.get<{ success: boolean; results: IMediaState; }>(
      this.SERVER + '/api/media/lineage/' + id
    );
  }

  signContract(id: String) {
    return this.http.post<{
      success: boolean;
      updatedContract: {};
      updatedMedia: {};
    }>(this.SERVER + '/api/contracts/sign/' + id, {});
  }

  branchProject(id: string) {
    return this.http.post<{ success: boolean; results: IMediaState, lineage: {} }>(
      this.SERVER + '/api/media/diverge/' + id,
      {}
    );
  }
}

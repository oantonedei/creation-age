import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  SERVER = environment.SERVER;

  constructor(private http: HttpClient) { }

  getAllMedia() {
    return this.http.get<{ status: number, success: boolean, results: any, message: string }>(
      this.SERVER + '/api/media'
    );
  }
}

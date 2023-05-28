import { Injectable } from '@angular/core';
import { IPaginated, ModuleSearchParam, PageSearchParam } from '@common/models';
import { RequestState } from '@services/enums';
import { IApiApplication, IApiRequestState, IApiResponse } from '@services/models';
import { IApiModule } from '@services/models/api-module.imodel';
import { ModuleApiService } from '@services/services';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends AppService {
  private applications:IApiApplication[] = [];

  constructor(
  private moduleApi:ModuleApiService) {
    super();
   }

   GetApplications(): Observable<IApiRequestState<IApiApplication[]>> {
    return new Observable((observer) => {
      if (this.applications && this.applications.length > 0) {
        observer.next({
          state: RequestState.COMPLETED, message: "Successful.",
          data: this.applications
        });
      } else {
        observer.next({ state: RequestState.LOADING });
        this.moduleApi.getApplications(new PageSearchParam()).subscribe({
          next: (response: IApiResponse<IApiApplication>) => {
            observer.next({
              state: RequestState.COMPLETED, message: response.message,
              data: (response.data as IPaginated<IApiApplication>).records
            });
          }, error: (error: any) => {
            console.error(error);
            observer.next({ state: RequestState.FAILED, message: this.getErrorMessage(error) ?? 'Something went wrong' });
          }
        });
      }
    });
  }

  GetModules(applicationId:number): Observable<IApiRequestState<IApiModule[]>> {
    return new Observable((observer) => {
      observer.next({ state: RequestState.LOADING });
        this.moduleApi.getModules(new ModuleSearchParam(applicationId, undefined, 1, 20)).subscribe({
          next: (response: IApiResponse<IApiModule>) => {
            observer.next({
              state: RequestState.COMPLETED, message: response.message,
              data: (response.data as IPaginated<IApiModule>).records
            });
          }, error: (error: any) => {
            console.error(error);
            observer.next({ state: RequestState.FAILED, message: this.getErrorMessage(error) ?? 'Something went wrong' });
          }
        });
    });
  }
}

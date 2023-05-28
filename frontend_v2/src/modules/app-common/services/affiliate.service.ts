import { Injectable } from '@angular/core';
import { AffiliateSearchParam, IPaginated, PageSearchParam } from '@common/models';
import { RequestState } from '@services/enums';
import { IApiAffiliate, IApiRegion, IApiRequestState, IApiResponse } from '@services/models';
import { AffiliateApiService } from '@services/services';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService extends AppService {
  private regions: IApiRegion[] = [];

  constructor(
    private affiliateApi: AffiliateApiService) {
    super();
  }

  GetRegions(): Observable<IApiRequestState<IApiRegion[]>> {
    return new Observable((observer) => {
      if (this.regions && this.regions.length > 0) {
        observer.next({
          state: RequestState.COMPLETED, message: "Successful.",
          data: this.regions
        });
      } else {
        observer.next({ state: RequestState.LOADING });
        this.affiliateApi.getRegions(new PageSearchParam()).subscribe({
          next: (response: IApiResponse<IApiRegion>) => {
            observer.next({
              state: RequestState.COMPLETED, message: response.message,
              data: (response.data as IPaginated<IApiRegion>).records
            });
          }, error: (error: any) => {
            console.error(error);
            observer.next({ state: RequestState.FAILED, message: this.getErrorMessage(error) ?? 'Something went wrong' });
          }
        });
      }
    });
  }

  GetAffiliates(regionId?:number): Observable<IApiRequestState<IApiAffiliate[]>> {
    return new Observable((observer) => {
      observer.next({ state: RequestState.LOADING });
        this.affiliateApi.getAffiliates(new AffiliateSearchParam(regionId, undefined, 1, 50)).subscribe({
          next: (response: IApiResponse<IApiAffiliate>) => {
            observer.next({
              state: RequestState.COMPLETED, message: response.message,
              data: (response.data as IPaginated<IApiAffiliate>).records
            });
          }, error: (error: any) => {
            console.error(error);
            observer.next({ state: RequestState.FAILED, message: this.getErrorMessage(error) ?? 'Something went wrong' });
          }
        });
    });
  }

}

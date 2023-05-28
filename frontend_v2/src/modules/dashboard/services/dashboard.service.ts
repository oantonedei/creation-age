import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { ApiRequestState, ApiResponse, RequestState } from 'src/api-services';
// import { ApiAdminDashboard } from 'src/api-services/models/api-admin-dashboard.model';
// import { DashboardApiService } from 'src/api-services/services/dashboard-api.service';
import { AdminDashboard } from '../models';

@Injectable()
export class DashboardService {
    constructor(
        //private dashboardApi: DashboardApiService
        ) { }

    // getDashboard$(): Observable<{}> {
    //     return of({});
    // }

    // getAdminDashboard(): Observable<ApiRequestState<AdminDashboard | undefined>> {
    //     return new Observable((observer) => {
    //         observer.next(new ApiRequestState(RequestState.LOADING));
    //         try {
    //             this.dashboardApi.getAdminDashboard().subscribe((respose: ApiResponse) => {
    //                 observer.next(new ApiRequestState(RequestState.COMPLETED, respose.message,
    //                     AdminDashboard.fromApiAdminDashboard(respose.data as ApiAdminDashboard)));
    //             }, (error: any) => {
    //                 console.log(error);
    //                 observer.next(new ApiRequestState(RequestState.FAILED, this.getErrorMessage(error) ?? 'Something went wrong', undefined, error.status == 404));
    //             });
    //         } catch (ex: any) {
    //             console.error(ex);
    //             observer.next(new ApiRequestState(RequestState.FAILED, ex.message ?? 'Something went wrong'));
    //         }
    //     });
    // }

    getErrorMessage(error: any): string {
        if (error.error?.message) {
            return error.error.message;
        } else {
            return error.message;
        }
    }
}

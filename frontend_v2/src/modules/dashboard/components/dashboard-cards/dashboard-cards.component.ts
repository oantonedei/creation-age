import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminDashboard } from '@modules/dashboard/models';
import { DashboardService } from '@modules/dashboard/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    dashboard!:AdminDashboard;
    errorMessage!:string;
    dashboardSub=new Subscription;

    

    constructor(private dashboardService:DashboardService,
        private cd:ChangeDetectorRef) {}

    ngOnInit() {
    }

}

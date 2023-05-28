/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';


/* Components */
import * as dashboardComponents from './components';

/* Containers */
import * as dashboardContainers from './containers';

/* Guards */
import * as dashboardGuards from './guards';

/* Services */
import * as dashboardServices from './services';
import { HomeComponent } from './containers/home/home.component';
import { SystemUserComponent } from './containers/system-user/system-user.component';
import { AppsDashboardComponent } from './containers/apps-dashboard/apps-dashboard.component';
import { DashboardComponent, LightComponent, StaticComponent } from './containers';
// import { StaticComponent } from './containers/system-user/system-user.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule
    ],
    providers: [...dashboardServices.services, ...dashboardGuards.guards],
    declarations: [...dashboardContainers.containers, ...dashboardComponents.components, HomeComponent, SystemUserComponent, AppsDashboardComponent, StaticComponent, LightComponent, DashboardComponent],
    exports: [...dashboardContainers.containers, ...dashboardComponents.components],
})
export class DashboardModule {}

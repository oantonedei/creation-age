import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';
import { SystemUserComponent } from './system-user/system-user.component';
import { AppsDashboardComponent } from './apps-dashboard/apps-dashboard.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

export const containers = [DashboardComponent, StaticComponent, LightComponent, UserDashboardComponent, AppsDashboardComponent, SystemUserComponent];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './system-user/system-user.component';
export * from './apps-dashboard/apps-dashboard.component';
export * from './user-dashboard/user-dashboard.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsComponent } from './container/analytics/analytics.component';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { AppCommonModule } from '@common/app-common.module';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [CommonModule, AppCommonModule, NavigationModule],
})
export class AnalyticsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import { ExploreComponent } from './container/explore/explore.component';
import { ViewProjectComponent } from './container/view-project/view-project.component';


@NgModule({
  declarations: [ExploreComponent, ViewProjectComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    NavigationModule,
  ],
})
export class ExploreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import { ExploreComponent } from './container/explore/explore.component';


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    NavigationModule,
  ],
})
export class ExploreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import { ExploreComponent } from './container/explore/explore.component';
import { ViewProjectComponent } from './container/view-project/view-project.component';
import { SignContractComponent } from './components/sign-contract/sign-contract.component';
import { ViewLineageComponent } from './container/view-lineage/view-lineage.component';


@NgModule({
  declarations: [ExploreComponent, ViewProjectComponent, SignContractComponent, ViewLineageComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    NavigationModule,
  ],
})
export class ExploreModule {}

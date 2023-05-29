/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Third Party */
import {
  NgbModal,
  NgbModalConfig,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
/* Containers */
import * as appCommonContainers from './containers';

/* Components */
import * as appCommonComponents from './components';

/* Guards */
//import * as appCommonGuards from './guards';

import * as appPipes from './pipes';

/* Services */
import * as appCommonServices from './services';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';

const thirdParty = [
  NgbModule,
  NgxSpinnerModule
];

const thirdPartyServices = [
  NgbModal,
  NgbModalConfig,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...thirdParty,
  ],
  providers: [
    ...appCommonServices.services,
    ...thirdPartyServices,
    ...appPipes.pipes,
  ],
  declarations: [
    ...appCommonContainers.containers,
    ...appCommonComponents.components,
    ...appPipes.pipes,
  ],
  exports: [
    ...appCommonContainers.containers,
    ...appCommonComponents.components,
    ...thirdParty,
    ...appPipes.pipes,
  ],
})
export class AppCommonModule {
}

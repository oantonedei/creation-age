import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectComponent } from './containers/create-project/create-project.component';
import { ProjectDetailComponent } from './containers/project-detail/project-detail.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { CreateParticipantComponent } from './components/create-participant/create-participant.component';


@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    CreateParticipantComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    NavigationModule
  ]
})
export class ProjectsModule { }

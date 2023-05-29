import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsModule } from './projects.module';
import { ProjectsComponent } from './containers/projects/projects.component';
import { ProjectDetailComponent } from './containers/project-detail/project-detail.component';
import { CreateProjectComponent } from './containers/create-project/create-project.component';
import { SBRouteData } from '@modules/navigation/models';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'My Projects',
      breadcrumbs: [
        {
          text: 'My Projects',
          active: true,
        },
      ],
    } as SBRouteData,
    canActivate: [],
    component: ProjectsComponent,
  },
  {
    path: ':projectId',
    component: ProjectDetailComponent,
    canActivate: []
  },
  {
    path: 'create',
    component: CreateProjectComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [ProjectsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

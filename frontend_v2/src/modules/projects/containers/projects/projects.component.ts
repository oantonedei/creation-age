import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {Alert} from "@common/models";
import IMediaState from '@modules/explore/models/IMediaState.interface';
import { ProjectsService } from '@modules/projects/services/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  cards: String[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

  projectsService = inject(ProjectsService)
  router = inject(Router);
  projects$!: Observable<IMediaState[]>;

  constructor() { 
    this.fetchProjects();
  }

  redirect() {
    this.router.navigate(['projects', 'create']);
  }
  
  viewProject(id: string) {
    this.router.navigate(['projects', id]);
  }
  fetchProjects() {
    const id = JSON.parse(localStorage.getItem('USER_STATE') || '{}')._id;
    this.projects$ = this.projectsService.getAllProjects(id);
  }
}

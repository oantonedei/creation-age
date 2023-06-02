import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '@modules/projects/services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  projectsService = inject(ProjectsService);
  router = inject(Router);
  projectForm = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    industry: ['', Validators.required],
    phase: ['', Validators.required],
    status: ['', Validators.required],
  });

  constructor(private http: HttpClient) {}

  createProject() {
    this.projectsService
      .createProject(
        this.projectForm.value as {
          name: string;
          description: string;
          industry: string;
          phase: string;
          status: string;
        }
      )
      .subscribe({
        next: (response) => {
          if (response.success) {
            if (response.results.status === 'open') {
              this.router.navigate(['projects', response.results._id]);
            } else {
              this.router.navigate(['projects']);
            }
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}

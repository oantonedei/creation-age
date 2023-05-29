import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  router= inject(Router);
  count = [
    { name: "Creation Age", value: "1" },
    { name: "Creation Age Version 2", value: "2" },
    { name: "Optimus Age", value: "3" },
    { name: "Optimus Era", value: "4" },
    { name: "Optimus Era Version 2", value: "5" },
    { name: "Optimus Era Version 3", value: "6" },
    { name: "Armagedon", value: "7" },
  ];
  viewProject(event: any) {
    console.log(event);
    this.router.navigate(['/projects/1']);
  }
}
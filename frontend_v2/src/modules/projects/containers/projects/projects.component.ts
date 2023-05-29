import { Component } from '@angular/core';
import {Alert} from "@common/models";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  cards: String[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];

  goToDetail(id: number): void {

  }
}

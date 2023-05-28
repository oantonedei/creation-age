import { Component } from '@angular/core';
import { NavLoaderService } from '@common/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private navLoaderService: NavLoaderService) {
    navLoaderService.sub();    
  }
  title = 'creation-age-app';
}

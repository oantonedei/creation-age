import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class LoaderComponent implements OnInit {
  message:string='';
  constructor() { }

  ngOnInit(): void {
  }
}

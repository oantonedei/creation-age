import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent implements OnInit {
@Input() switchButtonClass!:string;
@Input() switchClass!:string;
selectedLang!:string;
  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
    this.selectedLang = this.getLangName(this.translate.currentLang)?? '';
  }
  switchLang(langCode:string){
    this.translate.use(langCode);
    this.selectedLang = this.getLangName(langCode)?? '';
  }

  getLangName(code:string){
    return environment.languages.find(l=>  l.code==code)?.name;
  }
}

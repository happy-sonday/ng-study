import { Component, OnInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
import { LANG_METADATE } from '../lang-metadata';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {

  langMetadata = LANG_METADATE;


  langCode: string;

/*   constructor() {
    this.langCode='ko';
  } */
  constructor(public i18nSupporter : I18nSupportService){
    this.langCode= i18nSupporter.langCode;
  }

  ngOnInit(): void {
  }

  setLangCode(code:string){
    this.langCode=code;
    this.i18nSupporter.langCode=code;
  }
  syncToService(code){
    this.i18nSupporter.langCode=code;
  }



}

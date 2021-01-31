import { Injectable } from '@angular/core';
import { LANG_METADATE } from './lang-metadata';

@Injectable({
  providedIn: 'root'
})
export class I18nSupportService {
  langCode = 'ko';//초기값
  //private welcomeMsg;
  constructor() {
  /*   this.welcomeMsg={
      'ko' : '안녕하세요',
      'en' : 'Hello',
      'jp': 'こんにちは',
      'fr': 'Bonjour'
    }; */

   }

/*    getWelcomeMsgByCode(userName : string, code: string){
     const helloMsg = this.welcomeMsg[code];
     return `${helloMsg}, ${userName}님!!`;
   } */
/*    getWelcomeMsg(userName : string){
     const helloMsg = this.welcomeMsg[this.langCode];
     return `${helloMsg}, ${userName}님!`;
   }*/
   getWelcomeMsg(userName : string){
     const langData = LANG_METADATE.find(lang=>lang.code ===this.langCode);
     return `${langData.msg}, ${userName}`;
   }




}

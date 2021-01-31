import { AfterViewInit, Component, OnInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.scss']
})
export class WelcomeMsgComponent implements AfterViewInit {


//TODO:재정의 단축키 ctr+i
ngAfterViewInit(){
  const checkTouchFn = () =>{
    if(this.valid) return;
    this.snackbar.open('이름을 입력해 주세요', '확인', {duration:3000});

    //alert("이름을 입력해 주세요");
  };

  setTimeout(checkTouchFn, WelcomeMsgComponent.CHK_KEYUP_SEC);
}
welcomeMsg = '';
userName="";//기본값
private valid = false;
//5초동안 keyup이벤트를 통해 입력받은 값이 없으면 valid는 false 초기값을 넘겨
//조건문을 통해 alert을 발생시킨다.
private static CHK_KEYUP_SEC = 5000;
//TODO: TS 접근제한자 몀명이 없는 경우
//TODO: AtferViewInit이란

/* onKeyUp(name){
  this.valid=name.length>0;
} */

onChange(){
  this.valid=this.userName.length>0;
}
/* setName(name){
  this.userName=name;
} */
  //TODO:자동 import 해당 빨간줄 표시되는영역에 cursor를 올려두고 ctr+. 입력하면 자동 import
  //new I18nSupportService() 생성할 필요없이 앵귤러에서 대신 클래스를 생성해 제공
  //이러한 과정을 의존성 주입 DI라고 한다.
  constructor(public i18nSupporter : I18nSupportService, private snackbar : MatSnackBar) { }


  showWelcomeMsg() {
    //이벤트 메소드를 통해 userName을 전달받아 I18nSupportService로 실행하여 return값을 welcomeMsg에 대입
    //this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName, 'ko');
    this.welcomeMsg=this.i18nSupporter.getWelcomeMsg(this.userName);
  }


}

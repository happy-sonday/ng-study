import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{




 /*  //TODO:재정의 단축키 ctr+i
  ngAfterViewInit(){
    const checkTouchFn = () =>{
      if(this.valid) return;
      alert("이름을 입력해 주세요");
    }

    setTimeout(checkTouchFn, AppComponent.CHK_KEYUP_SEC);
  }
  userName="";//기본값
  private valid = false;
  private static CHK_KEYUP_SEC = 5000;
  //TODO: TS 접근제한자 몀명이 없는 경우
  //TODO: AtferViewInit이란

  onKeyUp(name){
    this.valid=name.length>0;
  }
  setName(name){
    this.userName=name;
  } */
}

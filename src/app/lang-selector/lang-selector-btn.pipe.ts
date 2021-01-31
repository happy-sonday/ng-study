import { Pipe, PipeTransform } from '@angular/core';

/* template에 해당 name의 값을 (|)와 함께 선언하면 transform의 source가 적용 */
@Pipe({
  name: 'langSelectorBtn'
})
export class LangSelectorBtnPipe implements PipeTransform {

 /*  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */
  transform(lang):any{
    return`${lang.name} (${lang.code})`;
  }



}

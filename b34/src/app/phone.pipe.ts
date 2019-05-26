import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(inp: any, args?: any): any {
    inp = inp.toString();
    let res = ''
    for(var i=0;i<inp.length; i++){
      if(i%3==0 && i>0){
        res += '-';
      }
      res += inp.charAt(i);
    }
    console.log(res);
    return res;
  }

}

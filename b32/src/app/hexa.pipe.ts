import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(x: any): any {
    return x.toString(16);
  }

}

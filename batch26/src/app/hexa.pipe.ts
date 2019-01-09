import { Pipe, PipeTransform } from '@angular/core';

/*app.filter('hexa', function(){
	return function(inp){
		return inp.toString(16);
	}
});*/
@Pipe({
  name: 'hexa'
})
export class HexaPipe implements PipeTransform {
		
  transform(inp: any): any {
    return inp.toString(16);
  }

}

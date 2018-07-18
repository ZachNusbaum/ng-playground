import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlekase'
})
export class TitlekasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

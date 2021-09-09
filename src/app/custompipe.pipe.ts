import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: number): string {
    return value / 10 + 'kg';
  }

}

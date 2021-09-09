import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'heightpipe'
})
export class HeightpipePipe implements PipeTransform {

  transform(value: number): string {
    return value / 10 + 'm';
  }

}

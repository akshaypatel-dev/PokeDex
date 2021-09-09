import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightpipe'
})
export class HeightpipePipe implements PipeTransform {

  transform(value:number, ...args: any[]): unknown {
    let convertedheight = value/10+'M'
    return convertedheight;
  }

}

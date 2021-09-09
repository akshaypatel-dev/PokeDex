import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value:number, ...args:any[]): unknown {
   let newvalue = value/10+'kg'
    return newvalue;
  }

}

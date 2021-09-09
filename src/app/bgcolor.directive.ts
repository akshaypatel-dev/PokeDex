import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {
  @Input() set appBgcolor(input: string) {
    this.elementRef.nativeElement.style.backgroundColor = this.colorsMap.get(input);
  };

  constructor(public elementRef: ElementRef) {
  }

  colorsMap: Map<string, string> = new Map()
    .set(`grass`, `#567D46`)
    .set(`fire`, `#E25822`)
    .set(`water`, `#80C5DE`)
    .set(`bug`, `#264A48`)
    .set(`normal`, `#D59C6C`)
    .set(`poison`, `#4DB560`)
    .set(`ground`, `#9B7654`)
    .set(`electric`, `#2EB872`)
    .set(`fairy`, `#233142`)
    .set(`fighting`, `#F44336`)
    .set(`psychic`, `#F44336`)
    .set(`rock`, `#564B41`)
    .set(`ghost`, `black`)
    .set(`ice`, `#267CA3`)
    .set(`dragon`, `#C34F50`)

}


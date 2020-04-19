import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;
 // @Input('frontValue') frontValue:string;
  @HostListener('blur') OnBLur() {
    const value: string = this.elementRef.nativeElement.value;
    if (this.format == 'uppercase') {
   this.elementRef.nativeElement.value = value.toUpperCase();
    } else {
      this.elementRef.nativeElement.value = value.toLowerCase();
    }
  }



  constructor(private elementRef: ElementRef) {

  }

}

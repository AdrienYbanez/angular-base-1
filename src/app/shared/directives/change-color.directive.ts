import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @HostListener('document:keydown', ['$event']) onKeydownHandler($event: KeyboardEvent) {
    switch ($event.key) {
      case 'ArrowUp':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'ArrowLeft':
        this.el.nativeElement.style.color = 'green';
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.color = 'orange';
        break;
    }
  }

  constructor(
    private el: ElementRef
  ) { }

}

import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = "";

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element);
  }

  ngOnInit(): void {
    /* this.element.nativeElement.addEventListener('mouseenter', () => {
      this.element.nativeElement.style.backgroundColor = this.appHover;
    });

    this.element.nativeElement.addEventListener('mouseleave', () => {
      this.element.nativeElement.style.backgroundColor = '';
    }); */
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.appHover
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      ''
    );
  }
}

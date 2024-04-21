import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = "";

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    /* this.element.nativeElement.addEventListener('mouseenter', () => {
      this.element.nativeElement.style.backgroundColor = this.appHover;
    });

    this.element.nativeElement.addEventListener('mouseleave', () => {
      this.element.nativeElement.style.backgroundColor = '';
    }); */
  }

  @HostListener('mouseenter') onMouseEnter() {
    //inject(Renderer2).setStyle(
    this.renderer.setStyle(
      //inject(ElementRef).nativeElement,
      this.element.nativeElement,
      'backgroundColor',
      this.appHover
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    //inject(Renderer2).setStyle(
    this.renderer.setStyle(
      //inject(ElementRef).nativeElement,
      this.element.nativeElement,
      'backgroundColor',
      ''
    );
  }
}

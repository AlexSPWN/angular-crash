import { HoverDirective } from './hover.directive';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    /* let ddd = new ElementRef("div");
    let fff = new Renderer2.arguments(); */
    const directive = new HoverDirective();
    expect(directive).toBeTruthy();
  });
});

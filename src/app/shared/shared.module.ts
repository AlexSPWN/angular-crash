import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertSymbolPipe } from './insert-symbol.pipe';



@NgModule({
  declarations: [ InsertSymbolPipe],
  imports: [
    CommonModule
  ],
  exports: [InsertSymbolPipe]
})
export class SharedModule { }

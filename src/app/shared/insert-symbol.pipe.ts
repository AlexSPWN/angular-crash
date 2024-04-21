import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insertSymbol'
})
export class InsertSymbolPipe implements PipeTransform {

  transform(value: string | undefined, symbol:string): string {
    return value ? `${symbol} ${value}` : "";
  }

}

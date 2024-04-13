import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { text } from '@fortawesome/fontawesome-svg-core';
import { InitService } from './services/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {

  title = "some title";

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef; // only first child
  @ViewChild('someDiv', {static: true}) someDiv!: ElementRef;
  @ViewChildren('someDiv') someDivs!: QueryList<ElementRef>; //all children
  

  constructor(private initService: InitService) {
    console.log(initService.config);
  }

  ngOnInit(): void {
    this.someDiv.nativeElement.innerHTML = "Dinamic conten for div";
    console.log(this.someDiv);
  }

  ngAfterViewInit(): void {
    //create Component Dinamically
    //const componentRef = this.vcr.createComponent(ButtonComponent).instance.text = "sdsd";
    //componentRef.instance.text = "Test"

    const secondDiv = this.someDivs?.find((d, i) => i == 1); //search second div
    if(secondDiv) {
      secondDiv.nativeElement.innerHTML = "Second div";
    }

    const lastDiv = this.someDivs?.get(2);
    if(lastDiv) {
      lastDiv.nativeElement.innerHTML = "last div";
    }
    
    //.nativeElement.innerHTML = "sdfdsf";
    //selDiv?.nativeElement.innerHTML = "Second div";
  }
}
function d(item: ElementRef<any>, index: number, array: ElementRef<any>[]): boolean {
  throw new Error('Function not implemented.');
}


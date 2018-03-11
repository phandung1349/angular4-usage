import { Component, OnInit, ElementRef, AfterViewInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  template: `
    <span #spanRef></span>
  `,
})
export class ElementRefComponent implements OnInit, AfterViewInit  {
  @ViewChild('spanRef', {read: ElementRef}) spanRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.spanRef.nativeElement.textContent = "Some spans";
  }

}

import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  template: `
    <ng-template #tpl>
      <p>I am p tag in the template</p>
      <span>I am span tag in the template</span>
    </ng-template>
  `
})
export class TemplateRefComponent implements OnInit, AfterViewInit {
  @ViewChild('tpl') tpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let elementRef = this.tpl.elementRef;
    console.log(elementRef.nativeElement.textContent);
  }

}

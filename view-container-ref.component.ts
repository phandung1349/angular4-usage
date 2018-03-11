import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-container-ref',
  template: `
    <span>I am first span</span><br>
    <ng-container #vc>
      <div style="color: green; font-size: 200%;">This is viewcontainer</div>
    </ng-container>
    <span>I am last span</span>

    <ng-template #tpl>
      <span>I am span in the template</span><br>
    </ng-template>

    <ng-template #tpl2>
      <span>I am span in the template2</span><br>
    </ng-template>
  `
})
export class ViewContainerRefComponent implements OnInit, AfterViewInit {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('tpl') tpl: TemplateRef<any>;
  @ViewChild('tpl2') tpl2: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.vc.element.nativeElement.textContext);

    // #insert
    // let viewRef = this.tpl.createEmbeddedView(null);
    // this.vc.insert(viewRef, 0);

    let viewRef2 = this.tpl2.createEmbeddedView(null);
    this.vc.insert(viewRef2, 2);
    // insert view index = 2

    // remove
    // setTimeout(() => {
    //   this.vc.detach(2);//remove view index = 2
    // }, 2000);


  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  template: `
    <span>I am first span</span> <br>
    <ng-container [ngTemplateOutlet]="tpl"></ng-container>
    <span>I am last span</span>
    <ng-template #tpl>
        <span>I am span in template</span> <br>
    </ng-template>

    <br><br><br><br>
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
    <hr>
    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
    <ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>
  `,
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

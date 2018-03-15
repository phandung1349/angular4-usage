import {
  Component, OnInit, Injectable, Injector, ReflectiveInjector,
  Compiler, NgModuleFactory
} from '@angular/core';

// core
// @Component({
//   selector: 'app-hello-world',
//   template: 'This is ng-component-outlet'
// })
// export class HelloWorldComponent {
// }

// @Component({
//   selector: 'app-ng-component-outlet',
//   template: `
//     <ng-container *ngComponentOutlet="HelloWorldComponent">
//     </ng-container>
//   `,
//   styleUrls: ['./ng-component-outlet.component.css']
// })
// export class NgComponentOutletComponent implements OnInit {
// This field is necessary to expose HelloWorld to the template.
//   HelloWorldComponent = HelloWorldComponent;

//   constructor() { }

//   ngOnInit() {
//   }

// }

// injectable
// @Injectable()
// class Greeter {
//   suffix = '!';
// }

// @Component({
//   selector: 'app-complete-component',
//   template: `Complete: <ng-content></ng-content>-----<ng-content></ng-content>{{ greeter.suffix }}`
// })
// export class CompleteComponent {
//   constructor(public greeter: Greeter) { }
// }

// @Component({
//   selector: 'app-ng-component-outlet',
//   template: `
//     <ng-container *ngComponentOutlet="CompleteComponent;
//     injector: myInjector;  content: myContent">
//     </ng-container>
//   `
// })
// export class NgComponentOutletComponent implements OnInit {
//   CompleteComponent = CompleteComponent;
//   myInjector: Injector;

//   myContent = [[document.createTextNode('Ahoj')], [document.createTextNode('Svet')]];

//   constructor(injector: Injector) {
//     this.myInjector = ReflectiveInjector.resolveAndCreate([Greeter], injector);
//   }

//   ngOnInit() {
//   }
// }

// ngModuleFactory
@Component({ selector: 'app-other-module-component', template: `Other Module Component!` })
export class OtherModuleComponent {
}

@Component({
  selector: 'app-ng-component-outlet',
  template: `
    <ng-container *ngComponentOutlet="OtherModuleComponent;
      ngModuleFactory: myModule;"></ng-container>`
})
export class NgComponentOutletComponent implements OnInit {
  OtherModuleComponent = OtherModuleComponent;
  myModule: NgModuleFactory<any>;

  constructor(compiler: Compiler) {
    this.myModule = compiler.compileModuleSync(OtherModuleComponent);
  }

  ngOnInit() {
  }
}

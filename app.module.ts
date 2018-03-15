import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { ViewRefComponent } from './view-ref/view-ref.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { NgComponentOutletComponent } from './ng-component-outlet/ng-component-outlet.component';

// import { HelloWorldComponent } from './ng-component-outlet/ng-component-outlet.component';
// import { CompleteComponent } from './ng-component-outlet/ng-component-outlet.component';
import { OtherModuleComponent } from './ng-component-outlet/ng-component-outlet.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementRefComponent,
    TemplateRefComponent,
    ViewRefComponent,
    ViewContainerRefComponent,
    NgTemplateOutletComponent,
    NgComponentOutletComponent,
    // HelloWorldComponent,
    // CompleteComponent,
    OtherModuleComponent,
  ],
  entryComponents: [
    // HelloWorldComponent,
    // CompleteComponent,
    OtherModuleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

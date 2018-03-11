import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { ViewRefComponent } from './view-ref/view-ref.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementRefComponent,
    TemplateRefComponent,
    ViewRefComponent,
    ViewContainerRefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

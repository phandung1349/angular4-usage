import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- #1 import component
import { HeroListComponent }   from './hero-list/hero-list.component';

import { HeroService }         from './hero.service';
import { HeroDetailTestComponent } from './hero-detail-test/hero-detail-test.component'; //  <-- #1 import service

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroDetailTestComponent
  ],
  exports: [ // export for the DemoModule
    AppComponent,
    HeroDetailComponent,
    HeroDetailTestComponent,
    HeroListComponent
  ],
  providers: [ HeroService ], // <-- #4 provide HeroService
  bootstrap: [ AppComponent ]
})
export class AppModule { }

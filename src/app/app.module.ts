import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';
import { Exercice5Component } from './exercice5/exercice5.component';
import { Exercice6Component } from './exercice6/exercice6.component';
import { Exercice7Component } from './exercice7/exercice7.component';
import { Exercice5EnfantComponent } from './exercice5/exercice5-enfant/exercice5-enfant.component';
import { Exercice7EnfantComponent } from './exercice7/exercice7-enfant/exercice7-enfant.component';
import { Exercice8Component } from './exercice8/exercice8.component';
import { ChangeColorDirective } from './shared/directives/change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exercice1Component,
    Exercice3Component,
    Exercice4Component,
    Exercice5Component,
    Exercice6Component,
    Exercice7Component,
    Exercice5EnfantComponent,
    Exercice7EnfantComponent,
    Exercice8Component,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

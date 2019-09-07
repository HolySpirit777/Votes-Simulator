import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PldComponent } from './pld/pld.component';
import { PrmComponent } from './prm/prm.component';
import { PrscComponent } from './prsc/prsc.component';
import { VotosRoutingModule } from './votos-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PldComponent,
    PrmComponent,
    PrscComponent
  ],
  imports: [
    BrowserModule,
    VotosRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

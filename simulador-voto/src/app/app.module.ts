import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PldComponent } from './pld/pld.component';
import { PrmComponent } from './prm/prm.component';
import { PrscComponent } from './prsc/prsc.component';
import { VotosRoutingModule } from './votos-routing.module';
import { PldPresidenteComponent } from './pld-presidente/pld-presidente.component';
import { PldSenadorComponent } from './pld-senador/pld-senador.component';
import { PldDiputadoComponent } from './pld-diputado/pld-diputado.component';
import { PldAlcaldeComponent } from './pld-alcalde/pld-alcalde.component';
import { PldRegidorComponent } from './pld-regidor/pld-regidor.component';
import { PrmPresidenteComponent } from './prm-presidente/prm-presidente.component';
import { PrmDiputadoComponent } from './prm-diputado/prm-diputado.component';
import { PrmAlcaldeComponent } from './prm-alcalde/prm-alcalde.component';
import { PrmRegidorComponent } from './prm-regidor/prm-regidor.component';
import { PrmSenadorComponent } from './prm-senador/prm-senador.component';
import { PrscPresidenteComponent } from './prsc-presidente/prsc-presidente.component';
import { PrscDiputadoComponent } from './prsc-diputado/prsc-diputado.component';
import { PrscSenadorComponent } from './prsc-senador/prsc-senador.component';
import { PrscAlcaldeComponent } from './prsc-alcalde/prsc-alcalde.component';
import { PrscRegidorComponent } from './prsc-regidor/prsc-regidor.component';
import { ResultadoFinalComponent } from './resultado-final/resultado-final.component';

import { ResultadoFinalService } from './resultado-final.service';

@NgModule({
  declarations: [
    AppComponent,
    PldComponent,
    PrmComponent,
    PrscComponent,
    PldPresidenteComponent,
    PldSenadorComponent,
    PldDiputadoComponent,
    PldAlcaldeComponent,
    PldRegidorComponent,
    PrmPresidenteComponent,
    PrmDiputadoComponent,
    PrmAlcaldeComponent,
    PrmRegidorComponent,
    PrmSenadorComponent,
    PrscPresidenteComponent,
    PrscDiputadoComponent,
    PrscSenadorComponent,
    PrscAlcaldeComponent,
    PrscRegidorComponent,
    ResultadoFinalComponent
  ],
  imports: [
    BrowserModule,
    VotosRoutingModule,
    FlexLayoutModule
  ],
  providers: [ResultadoFinalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PldComponent } from './pld/pld.component';
import { PrmComponent } from './prm/prm.component';
import { PrscComponent } from './prsc/prsc.component';
import { PldPresidenteComponent } from './pld-presidente/pld-presidente.component';
import { PldSenadorComponent } from './pld-senador/pld-senador.component';
import { PldDiputadoComponent } from './pld-diputado/pld-diputado.component';
import { PldRegidorComponent } from './pld-regidor/pld-regidor.component';
import { PldAlcaldeComponent } from './pld-alcalde/pld-alcalde.component';

import { PrmAlcaldeComponent } from './prm-alcalde/prm-alcalde.component';
import { PrmDiputadoComponent } from './prm-diputado/prm-diputado.component';
import { PrmPresidenteComponent } from './prm-presidente/prm-presidente.component';
import { PrmRegidorComponent } from './prm-regidor/prm-regidor.component';
import { PrmSenadorComponent } from './prm-senador/prm-senador.component';

import { PrscAlcaldeComponent } from './prsc-alcalde/prsc-alcalde.component';
import { PrscDiputadoComponent } from './prsc-diputado/prsc-diputado.component';
import { PrscPresidenteComponent } from './prsc-presidente/prsc-presidente.component';
import { PrscRegidorComponent } from './prsc-regidor/prsc-regidor.component';
import { PrscSenadorComponent } from './prsc-senador/prsc-senador.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: AppComponent
  },
      {
        path: 'pld',
        component: PldComponent,
        children: [
          {
            path: 'pld-presidente',
            component: PldPresidenteComponent
          },
          {
          path: 'pld-senador',
          component: PldSenadorComponent
        },
        {
          path: 'pld-diputado',
          component: PldDiputadoComponent
        },
        {
          path: 'pld-regidor',
          component: PldRegidorComponent
        },
        {
          path: 'pld-alcalde',
          component: PldAlcaldeComponent
        }
        ]
      },
  {
    path: 'prm',
    component: PrmComponent,
    children: [
      {
        path: 'prm-presidente',
        component: PrmPresidenteComponent
      },
      {
      path: 'prm-senador',
      component: PrmSenadorComponent
    },
    {
      path: 'prm-diputado',
      component: PrmDiputadoComponent
    },
    {
      path: 'prm-regidor',
      component: PrmRegidorComponent
    },
    {
      path: 'prm-alcalde',
      component: PrmAlcaldeComponent
    }
    ]
  },
  {
    path: 'prsc',
    component: PrscComponent,
    children: [
      {
        path: 'prsc-presidente',
        component: PrscPresidenteComponent
      },
      {
      path: 'prsc-senador',
      component: PrscSenadorComponent
    },
    {
      path: 'prsc-diputado',
      component: PrscDiputadoComponent
    },
    {
      path: 'prsc-regidor',
      component: PrscRegidorComponent
    },
    {
      path: 'prsc-alcalde',
      component: PrscAlcaldeComponent
    }
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class VotosRoutingModule { }

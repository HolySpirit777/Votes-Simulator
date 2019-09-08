import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PldComponent } from './pld/pld.component';
import { PrmComponent } from './prm/prm.component';
import { PrscComponent } from './prsc/prsc.component';
import { PldPresidenteComponent } from './pld-presidente/pld-presidente.component';
import { PldSenadorComponent } from './pld-senador/pld-senador.component';

const routes: Routes = [
      {
        path: 'pld',
        component: PldComponent,
        children: [
          {
            path: 'pld-presidente',
            component: PldPresidenteComponent
          }
        ]
      },
  {
    path: 'prm',
    component: PrmComponent
  },
  {
    path: 'prsc',
    component: PrscComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PldComponent } from './pld/pld.component';
import { PrmComponent } from './prm/prm.component';
import { PrscComponent } from './prsc/prsc.component';

const routes: Routes = [
  {
    path: 'pld',
    component: PldComponent
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

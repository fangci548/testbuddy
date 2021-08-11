import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycasePairedPage } from './mycase-paired.page';

const routes: Routes = [
  {
    path: '',
    component: MycasePairedPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../../message/message.module').then(m => m.MessagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycasePairedPageRoutingModule {}

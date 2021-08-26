import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycaseDonePage } from './mycase-done.page';

const routes: Routes = [
  {
    path: '',
    component: MycaseDonePage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./message/message.module').then(m => m.MessagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycaseDonePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OthercaseRunningPage } from './othercase-running.page';

const routes: Routes = [
  {
    path: '',
    component: OthercaseRunningPage
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
export class OthercaseRunningPageRoutingModule {}

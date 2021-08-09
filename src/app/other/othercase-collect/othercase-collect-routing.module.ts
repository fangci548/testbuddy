import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OthercaseCollectPage } from './othercase-collect.page';

const routes: Routes = [
  {
    path: '',
    component: OthercaseCollectPage
  },
  {
    path: 'collect-detail/:id',
    loadChildren: () => import('./collect-detail/collect-detail.module').then( m => m.CollectDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthercaseCollectPageRoutingModule {}

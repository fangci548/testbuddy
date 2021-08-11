import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycaseUnpairedPage } from './mycase-unpaired.page';

const routes: Routes = [
  {
    path: '',
    component: MycaseUnpairedPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./post-detail/post-detail.module').then( m => m.PostDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycaseUnpairedPageRoutingModule {}

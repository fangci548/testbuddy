import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectDetailPage } from './collect-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CollectDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectDetailPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycaseHeartPage } from './mycase-heart.page';

const routes: Routes = [
  {
    path: '',
    component: MycaseHeartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycaseHeartPageRoutingModule {}

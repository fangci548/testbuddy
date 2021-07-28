import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OthercaseCollectPage } from './othercase-collect.page';

const routes: Routes = [
  {
    path: '',
    component: OthercaseCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthercaseCollectPageRoutingModule {}

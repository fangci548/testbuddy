import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycasePage } from './mycase.page';

const routes: Routes = [
  {
    path: '',
    component: MycasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycasePageRoutingModule {}

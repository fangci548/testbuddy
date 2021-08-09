import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayManagePage } from './pay-manage.page';

const routes: Routes = [
  {
    path: '',
    component: PayManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayManagePageRoutingModule {}

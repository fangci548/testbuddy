import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinManagePage } from './coin-manage.page';

const routes: Routes = [
  {
    path: '',
    component: CoinManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinManagePageRoutingModule {}

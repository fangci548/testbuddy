import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountManagePage } from './account-manage.page';

const routes: Routes = [
  {
    path: '',
    component: AccountManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountManagePageRoutingModule {}

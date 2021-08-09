import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalManagePage } from './personal-manage.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalManagePageRoutingModule {}

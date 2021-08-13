import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcasePage } from './addcase.page';

const routes: Routes = [
  {
    path: '',
    component: AddcasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcasePageRoutingModule {}

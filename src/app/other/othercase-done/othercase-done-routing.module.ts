import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OthercaseDonePage } from './othercase-done.page';

const routes: Routes = [
  {
    path: '',
    component: OthercaseDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthercaseDonePageRoutingModule {}

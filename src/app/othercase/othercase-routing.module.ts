import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OthercasePage } from './othercase.page';

const routes: Routes = [
  {
    path: '',
    component: OthercasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthercasePageRoutingModule {}

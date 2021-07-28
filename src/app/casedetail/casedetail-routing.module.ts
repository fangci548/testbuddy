import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasedetailPage } from './casedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CasedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasedetailPageRoutingModule {}

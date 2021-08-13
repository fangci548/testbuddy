import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutmoneyinPage } from './putmoneyin.page';

const routes: Routes = [
  {
    path: '',
    component: PutmoneyinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutmoneyinPageRoutingModule {}

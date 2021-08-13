import { AddcasePage } from './addcase/addcase.page';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycasePage } from './mycase.page';

const routes: Routes = [
  {
    path: '',
    component: MycasePage
  },
  {
    path: 'addcase',
    loadChildren:() => import('./addcase/addcase.module').then(m => m.AddcasePageModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycasePageRoutingModule {}

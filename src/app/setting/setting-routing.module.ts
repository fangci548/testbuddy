import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPage
  },
  {
    path: 'coin-manage',
    loadChildren: () => import('./coin-manage/coin-manage.module').then( m => m.CoinManagePageModule)
  },
  {
    path: 'personal-manage',
    loadChildren: () => import('./personal-manage/personal-manage.module').then( m => m.PersonalManagePageModule)
  },
  {
    path: 'pay-manage',
    loadChildren: () => import('./pay-manage/pay-manage.module').then( m => m.PayManagePageModule)
  },
  {
    path: 'account-manage',
    loadChildren: () => import('./account-manage/account-manage.module').then( m => m.AccountManagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule {}

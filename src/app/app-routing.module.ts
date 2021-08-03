import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'mycase',
    loadChildren: () => import('./my/mycase/mycase.module').then( m => m.MycasePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'othercase',
    loadChildren: () => import('./other/othercase/othercase.module').then( m => m.OthercasePageModule),
  },
  {
    path: 'othercase-done',
    loadChildren: () => import('./other/othercase-done/othercase-done.module').then( m => m.OthercaseDonePageModule)
  },
  {
    path: 'othercase-collect',
    loadChildren: () => import('./other/othercase-collect/othercase-collect.module').then(m => m.OthercaseCollectPageModule)
  },
  {
    path: 'othercase-running',
    loadChildren: () => import('./other/othercase-running/othercase-running.module').then( m => m.OthercaseRunningPageModule)
  },
  {
    path: 'mycase-paired',
    loadChildren: () => import('./my/mycase-paired/mycase-paired.module').then( m => m.MycasePairedPageModule)
  },
  {
    path: 'mycase-unpaired',
    loadChildren: () => import('./my/mycase-unpaired/mycase-unpaired.module').then( m => m.MycaseUnpairedPageModule)
  },
  {
    path: 'casedetail',
    loadChildren: () => import('./casedetail/casedetail.module').then( m => m.CasedetailPageModule)
  },  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },








];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

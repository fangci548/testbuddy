import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },  {
    path: 'mycase',
    loadChildren: () => import('./mycase/mycase.module').then( m => m.MycasePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'othercase',
    loadChildren: () => import('./othercase/othercase.module').then( m => m.OthercasePageModule)
  },
  {
    path: 'mycase-heart',
    loadChildren: () => import('./mycase-heart/mycase-heart.module').then( m => m.MycaseHeartPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

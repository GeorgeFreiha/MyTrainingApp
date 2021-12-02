import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'chest-exercises',
    loadChildren: () => import('./pages/chest-exercises/chest-exercises.module').then( m => m.ChestExercisesPageModule)
  },
  {
    path: 'back-exercises',
    loadChildren: () => import('./pages/back-exercises/back-exercises.module').then( m => m.BackExercisesPageModule)
  },
  {
    path: 'legs-exercises',
    loadChildren: () => import('./pages/legs-exercises/legs-exercises.module').then( m => m.LegsExercisesPageModule)
  },
  {
    path: 'arms-exercises',
    loadChildren: () => import('./pages/arms-exercises/arms-exercises.module').then( m => m.ArmsExercisesPageModule)
  },
  {
    path: 'delts-exercises',
    loadChildren: () => import('./pages/delts-exercises/delts-exercises.module').then( m => m.DeltsExercisesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

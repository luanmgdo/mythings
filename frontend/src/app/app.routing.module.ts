import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}

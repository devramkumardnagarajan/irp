import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {PagesComponent} from './pages/pages.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ListComponent} from './shared/list/list.component';
import {CreateComponent} from './shared/create/create.component';
import {HomeComponent} from './pages/home/home.component';
import {SubHomeComponent} from './pages/sub-home/sub-home.component';
const routes: Routes = [
  /*{ path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },*/
  { path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':component',
        component : SubHomeComponent,
        children: [
          {
            path: ':module',
            component: ListComponent,
          },
          {
            path: ':module/form/:id',
            component: CreateComponent,
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

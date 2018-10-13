/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {APP_BASE_HREF, CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, Injector} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './shared/form/form.component';
import { TextboxComponent } from './shared/inputs/textbox/textbox.component';
import { CheckboxComponent } from './shared/inputs/checkbox/checkbox.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import { ToasterModule } from 'angular2-toaster';
import {TableComponent} from './shared/table/table.component';
import {UserComponent} from './pages/user/user.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {PagesComponent} from './pages/pages.component';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import { TableTextComponent } from './shared/table/table-text/table-text.component';
import {TableModule} from './shared/table/table.module';
import {TableSelectComponent} from './shared/table/table-select/table-select.component';
import {TableStatusComponent} from './shared/table/table-status/table-status.component';
import {UserCreateComponent} from './pages/user/user-create/user-create.component';
import { SelectComponent } from './shared/inputs/select/select.component';
import {DeleteComponent} from './shared/table/table-operations/delete/delete.component';
import {TableOperationsComponent} from './shared/table/table-operations/table-operations.component';
import {EditComponent} from './shared/table/table-operations/edit/edit.component';
import { ListComponent } from './shared/list/list.component';
import { CreateComponent } from './shared/create/create.component';
import {HomeComponent} from './pages/home/home.component';
import {SubHomeComponent} from './pages/sub-home/sub-home.component';

const FormComponents = [
  FormComponent,
  TextboxComponent,
  CheckboxComponent,
  SelectComponent,
];
const AuthComponents = [
  RegisterComponent,
  LoginComponent,
];
const UserComponents = [
  UserComponent,
  UserCreateComponent,
];
const TableTextComponents = [
  TableTextComponent,
  TableSelectComponent,
  TableStatusComponent,
];
const TableOperationComponents = [
  EditComponent,
  DeleteComponent,
  TableOperationsComponent,
];
const TableComponents = [
  ...TableOperationComponents,
  ...TableTextComponents,
  TableComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    ToasterModule.forRoot(),
    CommonModule,
    DashboardModule,
    TableModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8000/api/',
          login: {
            endpoint: 'login',
            method: 'post',
          },
          register: {
            endpoint: 'register',
            method: 'post',
          },
        }),
      ],
      forms: {},
    }),
  ],
  declarations: [
    AppComponent,
    ...AuthComponents,
    ...FormComponents,
    ...TableComponents,
    ...UserComponents,
    PagesComponent,
    SelectComponent,
    ListComponent,
    CreateComponent,
    HomeComponent,
    SubHomeComponent,
  ],
  bootstrap: [AppComponent],

  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {

}


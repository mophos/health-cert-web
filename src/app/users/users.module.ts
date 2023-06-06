import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { InformComponent } from './inform/inform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressComponent } from './progress/progress.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

@NgModule({
  declarations: [
    LoginComponent,
    InformComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    JwBootstrapSwitchNg2Module,
    NgSelectModule,
    NgbModule,
    AngularMyDatePickerModule
  ]
})
export class UsersModule { }

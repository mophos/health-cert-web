
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MainModule } from './main/main.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ToastrModule } from 'ngx-toastr';
// import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        MainModule,
        ExamplesModule,
        UsersModule,
        // JwBootstrapSwitchNg2Module,
        ToastrModule.forRoot(), // ToastrModule added
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

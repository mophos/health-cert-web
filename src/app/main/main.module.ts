import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { MainComponent } from './main.component';
import { NavbarComponent } from 'app/main/navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        // JwBootstrapSwitchNg2Module
    ],
    declarations: [
        MainComponent,
        AboutComponent,
        NavbarComponent
    ],
    exports: [MainComponent, NavbarComponent]
})
export class MainModule { }

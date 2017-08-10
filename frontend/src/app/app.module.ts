import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app.routing.module';
import {NsmanModule} from './nsman/nsman.module';
import {SmanModule} from './sman/sman.module';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {NsmanFormModule} from './nsman/nsman-form/nsman-form.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NsmanModule,
    SmanModule,
    HttpClientModule,
    ReactiveFormsModule,
    NsmanFormModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

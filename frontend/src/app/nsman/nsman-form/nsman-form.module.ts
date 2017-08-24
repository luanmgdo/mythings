import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NsmanFormComponent} from './nsman-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
      NsmanFormComponent
  ]
})
export class NsmanFormModule { }
